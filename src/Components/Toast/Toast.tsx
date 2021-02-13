import { Title } from "../Text";
import "./Toast.scss";

interface Props {
  type?: "loading" | "error" | "success";
  message?: string;
}

export const Toast: React.FC<Props> = ({
  type = "loading",
  message = "",
  ...rest
}) => {
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
      <div className={`toast ${type}`}>{messageElement}</div>
    </div>
  );
};
