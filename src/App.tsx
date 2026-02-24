import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { authStore, SetAllAccessTokens } from "./mobx_stores/RootStore";
import { auth, onAuthStateChangedListener } from "./firebase/Firebase";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const verifyEmailHandled = useRef(false);

  // Handle Firebase email verification link: ?mode=verifyEmail&oobCode=...&continueUrl=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");
    if (mode !== "verifyEmail" || !oobCode || verifyEmailHandled.current) return;
    verifyEmailHandled.current = true;
    (async () => {
      try {
        await authStore.VerifyEmail(oobCode);
        navigate("/verify-email", { replace: true });
      } catch {
        navigate("/", { replace: true });
      }
    })();
  }, [location.search, navigate]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken(true);
          window.sessionStorage.setItem("accessToken", idToken);
          SetAllAccessTokens(idToken);
          authStore.setUser(user);
          if (user.emailVerified) {
            window.sessionStorage.setItem("userStatus", "true");
            authStore.setIsActiveUser(true);
          } else {
            window.sessionStorage.setItem("userStatus", "false");
            authStore.setIsActiveUser(false);
          }
        } catch {
          // ignore token refresh errors
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Refresh Firebase ID token periodically so API calls stay valid during long sessions
  useEffect(() => {
    const refreshToken = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const idToken = await user.getIdToken(true);
          window.sessionStorage.setItem("accessToken", idToken);
          SetAllAccessTokens(idToken);
        } catch {
          // ignore
        }
      }
    };
    const interval = setInterval(refreshToken, 600000); // 10 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <MainRoutes />
    </>
  );
}

export default App;
