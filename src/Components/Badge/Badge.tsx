import { Title } from "../Text";
import "./Badge.scss";

interface Props {
  progress?: "default" | "incomplete" | "partiallyComplete" | "complete";
  size?: "small" | "medium";
  status?:
    | "default"
    | "success"
    | "info"
    | "attention"
    | "critical"
    | "warning"
    | "new";
}

export const Badge: React.FC<Props> = ({
  children,
  progress = "default",
  size = "medium",
  status = "default",
  ...rest
}) => {
  return (
    <div className={`badge ${progress} ${size} ${status}`}>{children}</div>
  );
};
