/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from "react";
import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Timer from "@/components/_shared/Timer";
import SessionConflictModal from "@/components/ui/modal/SessionConflictModal";
import { StoreContext } from "@/mobx_stores/RootStore";

interface Props {
  activeUser: any;
}

const PrivateRouteComponent: FC<Props> = ({ activeUser }) => {
  const { authStore } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeUser) {
      navigate("/", { replace: true });
    }
  }, [activeUser, location, navigate]);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      if (!activeUser) {
        navigate("/", { replace: true });
      } else {
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && !activeUser) {
        navigate("/", { replace: true });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeUser, navigate]);

  if (!activeUser) {
    return null;
  }

  return (
    <>
      <Timer />
      <Outlet />
      {authStore.isSessionConflicted && <SessionConflictModal />}
    </>
  );
};

const PrivateRoute = observer(PrivateRouteComponent);

export default PrivateRoute;

