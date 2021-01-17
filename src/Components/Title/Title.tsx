import "./Title.scss";

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title, ...rest }) => {
  return <div className="title">{title}</div>;
};
