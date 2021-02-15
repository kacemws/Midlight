import { useState } from "react";
import "./App.scss";
import { Button } from "./Components/Button";
import { Modal } from "./Components/Modal";
import { PageTitle } from "./Components/Text";
import { Toast } from "./Components/Toast";

function App() {
  const [successVisible, setSuccess] = useState(false);

  const [active, setActive] = useState(false);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4f5f7",
        }}
      >
        <div
          style={{
            marginBottom: "8px",
          }}
        >
          <PageTitle>Midlight's repo</PageTitle>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "1vh",
          }}
        >
          <Button
            size="medium"
            type="primary"
            onClick={() => {
              setSuccess(!successVisible);
              setActive(true);
            }}
          >
            toggle Success Toast
          </Button>
        </div>
      </div>
      {/**/}
      {/* <Toast
        type="success"
        active={successVisible}
        onClose={() => setSuccess(false)}
      /> */}
      {/**/}
      <Modal active={active} onClick={() => setActive(false)} />
    </>
  );
}

export default App;
