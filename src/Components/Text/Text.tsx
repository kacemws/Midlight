import "./Text.scss";

export const PageTitle: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="page-title">{children}</div>;
};
export const PageSubtitle: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="page-subtitle">{children}</div>;
};
export const Heading: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="heading">{children}</div>;
};
export const Subheading: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="subheading">{children}</div>;
};

export const Title: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="title">{children}</div>;
};

export const Body: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="body-text">{children}</div>;
};
export const Caption: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="caption">{children}</div>;
};
