import Registers from "./components/Registers";

function App() {

  const registers = {
    R0: 0,
    R1: 5,
    R2: 10,
    R3: 20,
  };

  return (
    <div>
      <h1>Simulador de CPU</h1>

      <Registers registers={registers} />
    </div>
  );
}

export default App;