import React, { useEffect, useState } from "react";
import { Title } from "../Text";
import "./Toast.scss";

interface Props {
  type?: "loading" | "error" | "success";
  message?: string;
  duration?: number;
  active?: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<Props> = ({
  type = "loading",
  message = "",
  duration = 1500,
  active = false,
  onClose = () => {
    console.log("hide toast");
  },
  ...rest
}) => {
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    setId(id + 1);
  }, []);

  const [displayed, setDisplayed] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(
    window.setTimeout((_: any) => {
      // function here
    }, duration)
  );

  useEffect(() => {
    console.log("changed the status to : " + active);

    // cleaning any time out;
    window.clearTimeout(timer);

    // displaying/hidding the toast;
    setDisplayed(active);

    if (active) {
      // hidding it after the given duration (in ms)
      const aux = window.setTimeout((_: any) => {
        setDisplayed(false);
        onClose();
      }, duration);
      setTimer(aux);
    }
  }, [active]);

  let displayedMessage = message;

  if (displayedMessage == "") {
    switch (type) {
      case "loading":
        displayedMessage = "Loading, please wait";
        break;
      case "error":
        displayedMessage = "An error occured";
        break;

      default:
        displayedMessage = "Operation done successfuly";
        break;
    }
  }

  const messageElement = <Title>{displayedMessage}</Title>;

  return (
    <div className="toast-wrapper">
      <div key={id} className={`toast ${type} ${displayed ? "visible" : ""}`}>
        {messageElement}
      </div>
    </div>
  );
};
