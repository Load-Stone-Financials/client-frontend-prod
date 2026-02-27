import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/mobx_stores/RootStore";
import { LogOut } from "@/utils/firebase/AuthFirestore";
import useIdleTimer from "@/hooks/useIdleTimer";

const SESSION_TIMEOUT_SECONDS = 60 * 15; // 15 minutes

function TimerComponent() {
  const { authStore } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const alertShownRef = useRef(false);

  const { timeLeft, isIdle } = useIdleTimer({
    timeoutInSeconds: SESSION_TIMEOUT_SECONDS,
    onIdle: async () => {
      authStore.setUserNotAuthenticated();
      await LogOut();
      navigate("/", { replace: true });
    },
    paused: authStore.loading || false,
  });

  useEffect(() => {
    const halfwayTime = SESSION_TIMEOUT_SECONDS / 2;

    if (timeLeft <= halfwayTime && !alertShownRef.current) {
      setShowAlert(true);
      alertShownRef.current = true;
    }

    if (!isIdle && timeLeft > halfwayTime) {
      alertShownRef.current = false;
      setShowAlert(false);
    }
  }, [timeLeft, isIdle]);

  const percentage = (timeLeft / SESSION_TIMEOUT_SECONDS) * 100;

  const loaderStyle = {
    "--percentage": `${percentage}%`,
  } as React.CSSProperties;

  return (
    <>
      {showAlert && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="rounded-lg bg-white px-6 py-4 shadow-xl">
            <p className="text-sm text-gray-800">
              Your session will time out soon due to inactivity.
            </p>
          </div>
        </div>
      )}
      <div className={`pointer-events-none fixed bottom-4 right-4 z-30`}>
        <div
          className={`h-10 w-10 rounded-full border-2 border-brand-purple/40 p-1 ${
            isIdle ? "opacity-30" : "opacity-100"
          }`}
        >
          <div
            className="h-full w-full rounded-full bg-brand-purple"
            style={{
              ...loaderStyle,
              clipPath: "inset(calc(100% - var(--percentage)) 0 0 0)",
            }}
          />
        </div>
      </div>
    </>
  );
}

const Timer = observer(TimerComponent);

export default Timer;

