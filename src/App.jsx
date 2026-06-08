import { useRef, useState } from "react";
import "./App.css";

import Registers from "./components/Registers";
import Memory from "./components/Memory";
import PipelineView from "./components/PipelineView";
import Controls from "./components/Controls";

import { CPU } from "./cpu/cpu";
import { parseProgram } from "./cpu/parser";

function App() {
  const cpuRef = useRef(new CPU());

  const [code, setCode] = useState("");

  const [registers, setRegisters] = useState({
    ...cpuRef.current.registers,
  });

  const [memory, setMemory] = useState([
    ...cpuRef.current.memory,
  ]);

  const [pipeline, setPipeline] = useState({
    ...cpuRef.current.pipeline,
  });

  const [pc, setPc] = useState(cpuRef.current.pc);

  const [isRunning, setIsRunning] = useState(false);

  const [operation, setOperation] = useState("MOV");

  const [register, setRegister] = useState("R1");

  const [register2, setRegister2] = useState("R2");

  const [value, setValue] = useState("");

  function syncScreen() {
    const cpu = cpuRef.current;

    setRegisters({ ...cpu.registers });
    setMemory([...cpu.memory]);
    setPipeline({ ...cpu.pipeline });
    setPc(cpu.pc);
  }

  function loadProgram() {
    const program = parseProgram(code);

    cpuRef.current.loadProgram(program);

    syncScreen();
  }

  function stepProgram() {
    const cpu = cpuRef.current;

    if (!cpu.hasPendingWork()) {
      const program = parseProgram(code);
      cpu.loadProgram(program);
    }

    cpu.clock();

    syncScreen();
  }

  function runAuto() {
    if (isRunning) return;

    setIsRunning(true);

    const interval = setInterval(() => {
      const cpu = cpuRef.current;

      if (!cpu.hasPendingWork()) {
        clearInterval(interval);
        setIsRunning(false);
        return;
      }

      cpu.clock();

      syncScreen();
    }, 1000);
  }

  function resetAll() {
    cpuRef.current.reset();

    syncScreen();
  }

  function addInstruction() {
    const instructions = code
      .split("\n")
      .filter((line) => line.trim() !== "");

    if (instructions.length >= 7) {
      alert("Máximo de 7 instruções.");
      return;
    }

    let newInstruction = "";

    if (operation === "ADD" || operation === "SUB") {
      newInstruction = `${operation} ${register}, ${register2}`;
    } else {
      if (!value) return;

      newInstruction = `${operation} ${register}, ${value}`;
    }

    setCode((prev) =>
      prev
        ? prev + "\n" + newInstruction
        : newInstruction
    );

    setValue("");
  }

  function clearProgram() {
    setCode("");
  }

  return (
    <div className="app">
      <h1>Simulador de CPU</h1>

      <Registers
        registers={registers}
        pc={pc}
      />

      <Memory
        memory={memory}
      />

      <PipelineView
        pipeline={pipeline}
      />

      <div className="assembler-box">
        <h2>Montador Visual</h2>

        <div className="assembler-form">

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option>MOV</option>
            <option>ADD</option>
            <option>SUB</option>
            <option>STORE</option>
            <option>LOAD</option>
          </select>

          <select
            value={register}
            onChange={(e) => setRegister(e.target.value)}
          >
            <option>R0</option>
            <option>R1</option>
            <option>R2</option>
            <option>R3</option>
          </select>

          {(operation === "ADD" || operation === "SUB") ? (

            <select
              value={register2}
              onChange={(e) => setRegister2(e.target.value)}
            >
              <option>R0</option>
              <option>R1</option>
              <option>R2</option>
              <option>R3</option>
            </select>

          ) : (

            <input
              type="number"
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

          )}

          <button onClick={addInstruction}>
            Adicionar
          </button>

          <button onClick={clearProgram}>
            Limpar Programa
          </button>

        </div>
      </div>

      <div className="program-box">
        <h2>Programa Atual</h2>

        {code
          .split("\n")
          .filter((line) => line.trim() !== "")
          .map((line, index) => (
            <div
              key={index}
              className={`program-line ${
                index === pc
                  ? "current-line"
                  : ""
              }`}
            >
              {String(index + 1).padStart(2, "0")} │ {line}
            </div>
          ))}
      </div>

      <Controls
        onLoad={loadProgram}
        onStep={stepProgram}
        onRun={runAuto}
        onReset={resetAll}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;