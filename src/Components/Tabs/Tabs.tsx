import "./Tabs.scss";

interface Props {
  tabs: (string | JSX.Element)[];
}

export const Tabs: React.FC<Props> = ({ children, tabs, ...rest }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => {
          return (
            <div className="tab" key={index}>
              {tab}
            </div>
          );
        })}
      </div>
      <div className="tabs-content">{children}</div>
    </div>
  );
};
