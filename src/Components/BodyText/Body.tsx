import "./Body.scss";

interface Props {
  title: string;
}

export const Body: React.FC<Props> = ({ title, ...rest }) => {
  return <div className="body-text">{title}</div>;
};
