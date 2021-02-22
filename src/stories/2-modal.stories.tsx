import { useState } from "react";
import { Button } from "../Components/Button";
import { Modal } from "../Components/Modal";

// import "../index.css";
export default {
  title: "Modal",
  component: Modal,
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
      <Modal
        title="this is a title"
        active={open}
        onClose={() => setOpen(!open)}
      >
        <Modal.Section>This is a section</Modal.Section>
      </Modal>
    </>
  );
};

export const WithPrimaryButton: React.VFC<{}> = () => {
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
      <Modal
        title="this modal contains a primary button"
        active={open}
        onClose={() => setOpen(!open)}
        primaryButton={{
          title: "Save",
          onClick: () => {
            setOpen(!open);
          },
        }}
      >
        <Modal.Section>This is a section</Modal.Section>
      </Modal>
    </>
  );
};

export const WithSecondaryButton: React.VFC<{}> = () => {
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
      <Modal
        title="this modal contains a secondary button"
        active={open}
        onClose={() => setOpen(!open)}
        secondaryButton={{
          title: "Cancel",
          type: "normal",
          onClick: () => {
            setOpen(!open);
          },
        }}
      >
        <Modal.Section>This is a section</Modal.Section>
      </Modal>
    </>
  );
};

export const WithDangerButton: React.VFC<{}> = () => {
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
      <Modal
        title="this modal contains a danger button"
        active={open}
        onClose={() => setOpen(!open)}
        secondaryButton={{
          title: "Cancel",
          type: "warning",
          onClick: () => {
            setOpen(!open);
          },
        }}
      >
        <Modal.Section>This is a section</Modal.Section>
      </Modal>
    </>
  );
};

export const SecondaryAndPrimary: React.VFC<{}> = () => {
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
      <Modal
        title="this modal contains both a secondary and primary button"
        active={open}
        onClose={() => setOpen(!open)}
        secondaryButton={{
          title: "Cancel",
          type: "warning",
          onClick: () => {
            setOpen(!open);
          },
        }}
        primaryButton={{
          title: "Save",
          onClick: () => {
            setOpen(!open);
          },
        }}
      >
        <Modal.Section>This is a section</Modal.Section>
      </Modal>
    </>
  );
};

export const MultipleSections: React.VFC<{}> = () => {
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
      <Modal
        title="this modal contains both a secondary and primary button"
        active={open}
        onClose={() => setOpen(!open)}
        secondaryButton={{
          title: "Cancel",
          type: "warning",
          onClick: () => {
            setOpen(!open);
          },
        }}
        primaryButton={{
          title: "Save",
          onClick: () => {
            setOpen(!open);
          },
        }}
      >
        <Modal.Section>section 1 </Modal.Section>
        <Modal.Section>
          <div
            style={{
              height: "200px",
            }}
          >
            section 2
          </div>
        </Modal.Section>
        <Modal.Section>section 3</Modal.Section>
      </Modal>
    </>
  );
};
