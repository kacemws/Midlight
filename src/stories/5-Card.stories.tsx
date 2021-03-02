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
    <div
      style={{
        height: "100%",
        width: "45%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <p>hey</p>
      </Card>
    </div>
  </div>
);

export const WithTitle: React.VFC<{}> = () => (
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
      <Card title="this is a title">
        <p>hey</p>
      </Card>
    </div>
  </div>
);

export const WithPrimaryButton: React.VFC<{}> = () => (
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
      <Card
        title="this is a title"
        primaryButton={{
          title: "this is a primary button",
          onClick: () => console.log("hey"),
        }}
      >
        <p>hey</p>
      </Card>
    </div>
  </div>
);

export const WithSection: React.VFC<{}> = () => (
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
      <Card
        title="this is a title"
        primaryButton={{
          title: "this is a primary button",
          onClick: () => console.log("hey"),
        }}
      >
        <Card.Section title="this is a section title">
          this is a section
        </Card.Section>
        <Card.Section title="this is a section title">
          this is another section
        </Card.Section>
      </Card>
    </div>
  </div>
);
