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
  size = "medium",
  ...rest
}) => {
  const event = () => {};

  const titleElement = <h1>{title}</h1>;

  return (
    <div className={`button ${type} ${size}`} onClick={onClick ?? event}>
      {titleElement}
    </div>
  );
};
