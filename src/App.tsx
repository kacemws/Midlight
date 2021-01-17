import "./App.scss";
import { Button } from "./Components/Button";
import { PageTitle } from "./Components/PageTitle";

function App() {
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
        }}
      >
        <div
          style={{
            marginBottom: "8px",
          }}
        >
          <PageTitle>Midlight's repo</PageTitle>
        </div>
        <Button title="Got it !" size="medium" type="primary" />
      </div>
    </>
  );
}

export default App;
