import "./App.scss";
import { Button } from "./Components/Button";

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
        <h1>Boilerplate for midlight...</h1>
        <Button title="Enregistrer" size="medium" type="primary" />
      </div>
    </>
  );
}

export default App;
