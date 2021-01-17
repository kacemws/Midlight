import { Title } from "../Title";
import "./Button.scss";

interface Props {
  type?: "primary" | "secondary" | "tertiary" | "warning";
  size?: "small" | "medium" | "large";
  title: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  title,
  onClick,
  type = "",
  size = "",
  ...rest
}) => {
  const event = () => {};

  const titleElement = <Title title={title} />;

  return (
    <div className={`button ${type} ${size}`} onClick={onClick ?? event}>
      {titleElement}
    </div>
  );
};
