import "./Tabs.scss";

interface Props {}

export const Tabs: React.FC<Props> = ({}) => {
  return (
    <div className="tabs-container">
      <div className="tabs"></div>
      <div className="tabs-content"></div>
    </div>
  );
};
