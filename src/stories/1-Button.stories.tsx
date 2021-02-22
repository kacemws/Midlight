import { Button } from "../Components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary: React.FC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
    }}
  >
    <Button
      type="primary"
      size="small"
      onClick={() => {
        console.log("primary button");
      }}
    >
      small primary
    </Button>
    <Button
      type="primary"
      onClick={() => {
        console.log("primary button");
      }}
    >
      medium primary
    </Button>
    <Button
      type="primary"
      size="large"
      onClick={() => {
        console.log("primary button");
      }}
    >
      Large primary
    </Button>
  </div>
);

export const Secondary: React.FC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
    }}
  >
    <Button
      type="secondary"
      size="small"
      onClick={() => {
        console.log("secondary button");
      }}
    >
      small secondary
    </Button>
    <Button
      type="secondary"
      onClick={() => {
        console.log("secondary button");
      }}
    >
      medium secondary
    </Button>
    <Button
      type="secondary"
      size="large"
      onClick={() => {
        console.log("secondary button");
      }}
    >
      Large secondary
    </Button>
  </div>
);

export const Tertiary: React.FC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
    }}
  >
    <Button
      size="small"
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      small tertiary
    </Button>
    <Button
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      medium tertiary
    </Button>
    <Button
      size="large"
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      Large tertiary
    </Button>
  </div>
);

export const Warning: React.FC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
    }}
  >
    <Button
      size="small"
      type="warning"
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      small warning
    </Button>
    <Button
      type="warning"
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      medium warning
    </Button>
    <Button
      size="large"
      type="warning"
      onClick={() => {
        console.log("Tertiary button");
      }}
    >
      Large warning
    </Button>
  </div>
);
