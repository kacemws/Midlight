import "./PageTitle.scss";

interface Props {
  children: string;
}

export const PageTitle: React.FC<Props> = ({ children, ...rest }) => {
  return <div className="page-title">{children}</div>;
};
