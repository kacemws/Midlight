import { useState } from "react";
import "./App.scss";
import { PageTitle } from "./Components/Text";

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
