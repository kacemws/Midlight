import { Tabs } from "../Components/Tabs";
import { Title } from "../Components/Text";

// import "../index.css";
export default {
  title: "Tabs",
  component: Tabs,
};

export const Default: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        height: "100%",
        width: "45%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        tabs={[
          "tab 1",
          "tab 2",
          "third tab",
          //   "tab 1",
          //   "tab 2",
          //   "third tab",
          //   "tab 1",
          //   "tab 2",
          //   "third tab",
          //   "tab 1",
          //   "tab 2",
          //   "third tab",
        ]}
      >
        <div
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>This is a children for the tab component</Title>
        </div>
      </Tabs>
    </div>
  </div>
);
