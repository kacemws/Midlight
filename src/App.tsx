import { useState } from "react";
import "./App.scss";
import { Button } from "./Components/Button";
import { PageTitle } from "./Components/Text";
import { Toast } from "./Components/Toast";

function App() {
  const [visible, setVisible] = useState(false);
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
        <Button
          size="medium"
          type="primary"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          toggle toast
        </Button>
      </div>
      <Toast type="success" active={visible} />
    </>
  );
}

export default App;
