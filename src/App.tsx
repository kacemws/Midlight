import { useState } from "react";
import "./App.scss";
import { Button } from "./Components/Button";
import { PageTitle } from "./Components/Text";
import { Toast } from "./Components/Toast";

function App() {
  const [visible, setVisible] = useState(false);
  const [successVisible, setSuccess] = useState(false);
  const [errorVisible, setError] = useState(false);

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
            type="tertiary"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            toggle Loading Toast
          </Button>
          <Button
            size="medium"
            type="primary"
            onClick={() => {
              setSuccess(!successVisible);
            }}
          >
            toggle Success Toast
          </Button>
          <Button
            size="medium"
            type="warning"
            onClick={() => {
              setError(!errorVisible);
            }}
          >
            toggle Error Toast
          </Button>
        </div>
      </div>
      {/**/}
      <Toast
        type="loading"
        active={visible}
        onClose={() => setVisible(false)}
      />
      <Toast
        type="success"
        active={successVisible}
        onClose={() => setSuccess(false)}
      />
      <Toast
        type="error"
        active={errorVisible}
        onClose={() => setError(false)}
      />
    </>
  );
}

export default App;
