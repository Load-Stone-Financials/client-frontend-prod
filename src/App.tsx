import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { authStore, SetAllAccessTokens } from "./mobx_stores/RootStore";
import { auth, onAuthStateChangedListener } from "./firebase/Firebase";

function App() {
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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <MainRoutes />
    </>
  );
}

export default App;
