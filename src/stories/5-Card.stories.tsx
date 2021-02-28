import { Card } from "../Components/Card";

// import "../index.css";
export default {
  title: "Card",
  component: Card,
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
    <Card />
  </div>
);
