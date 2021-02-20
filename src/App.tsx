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
        <PageTitle>Midlight's repo</PageTitle>
      </div>
    </>
  );
}

export default App;
