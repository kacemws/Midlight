import { Title } from "../Text";
import "./Button.scss";

interface Props {
  type?: "primary" | "secondary" | "tertiary" | "warning";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  type = "",
  size = "",
  ...rest
}) => {
  const event = () => {};

  const titleElement = <Title>{children}</Title>;

  return (
    <div className={`button ${type} ${size}`} onClick={onClick ?? event}>
      {titleElement}
    </div>
  );
};
