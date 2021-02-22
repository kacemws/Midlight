import { useState } from "react";
import { Button } from "../Components/Button";
import { Toast } from "../Components/Toast";

export default {
  title: "Toast",
  component: Toast,
};

export const Default: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="secondary" onClick={() => setOpen(true)}>
          Click me !{" "}
        </Button>
      </div>
      <Toast active={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Success: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="secondary" onClick={() => setOpen(true)}>
          Click me !{" "}
        </Button>
      </div>
      <Toast active={open} type="success" onClose={() => setOpen(false)} />
    </>
  );
};

export const Error: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="secondary" onClick={() => setOpen(true)}>
          Click me !{" "}
        </Button>
      </div>
      <Toast active={open} type="error" onClose={() => setOpen(false)} />
    </>
  );
};

export const CustomMessage: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="secondary" onClick={() => setOpen(true)}>
          Click me !{" "}
        </Button>
      </div>
      <Toast
        active={open}
        type="error"
        onClose={() => setOpen(false)}
        message="this is a custom error message"
      />
    </>
  );
};

export const CustomDuration: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="secondary" onClick={() => setOpen(true)}>
          Click me !{" "}
        </Button>
      </div>
      <Toast
        active={open}
        type="success"
        onClose={() => setOpen(false)}
        duration={3000}
        message="this is a custom duration toast"
      />
    </>
  );
};
