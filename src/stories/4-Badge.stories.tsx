import { Badge } from "../Components/Badge";
// import "../index.css";
export default {
  title: "Badge",
  component: Badge,
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
    <Badge>Fulfilled</Badge>
  </div>
);

export const Small: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Badge size="small">Fulfilled</Badge>
  </div>
);

export const Incomplete: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete">
      Fulfilled
    </Badge>
  </div>
);

export const PartiallyComplete: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="partiallyComplete">
      Fulfilled
    </Badge>
  </div>
);

export const Complete: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="complete">
      Fulfilled
    </Badge>
  </div>
);

export const Attention: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="attention">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="attention">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="attention">
      Fulfilled
    </Badge>
  </div>
);

export const Critical: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="critical">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="critical">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="critical">
      Fulfilled
    </Badge>
  </div>
);

export const Info: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="info">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="info">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="info">
      Fulfilled
    </Badge>
  </div>
);

export const New: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="new">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="new">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="new">
      Fulfilled
    </Badge>
  </div>
);

export const Success: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="success">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="success">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="success">
      Fulfilled
    </Badge>
  </div>
);

export const Warning: React.VFC<{}> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <Badge size="small" progress="incomplete" status="warning">
      Fulfilled
    </Badge>
    <Badge size="small" progress="partiallyComplete" status="warning">
      Fulfilled
    </Badge>
    <Badge size="small" progress="complete" status="warning">
      Fulfilled
    </Badge>
  </div>
);
