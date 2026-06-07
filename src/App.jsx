import { useEffect, useRef, useState } from "react";
import "./App.css";

import Editor from "./components/Editor";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import PipelineView from "./components/PipelineView";

import { CPU } from "./cpu/cpu";
import { parseProgram } from "./cpu/parser";

function App() {
  const cpuRef = useRef(new CPU());
  const timerRef = useRef(null);

  const [code, setCode] = useState(`MOV R1, 5
MOV R2, 8
ADD R1, R2`);

  const [registers, setRegisters] = useState({
    ...cpuRef.current.registers,
  });

  const [pipeline, setPipeline] = useState({
    ...cpuRef.current.pipeline,
  });

  const [pc, setPc] = useState(cpuRef.current.pc);
  const [isRunning, setIsRunning] = useState(false);

  function syncScreen() {
    const cpu = cpuRef.current;

    setRegisters({ ...cpu.registers });
    setPipeline({ ...cpu.pipeline });
    setPc(cpu.pc);
  }

  function stopAuto() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsRunning(false);
  }

  function loadProgram() {
    stopAuto();

    const parsedProgram = parseProgram(code);

    cpuRef.current.loadProgram(parsedProgram);

    syncScreen();
  }

  function stepProgram() {
    const cpu = cpuRef.current;

    if (!cpu.hasPendingWork()) {
      const parsedProgram = parseProgram(code);
      cpu.loadProgram(parsedProgram);
    }

    cpu.clock();

    syncScreen();
  }

  function runAuto() {
    const cpu = cpuRef.current;

    if (isRunning) {
      return;
    }

    if (!cpu.hasPendingWork()) {
      const parsedProgram = parseProgram(code);
      cpu.loadProgram(parsedProgram);
      syncScreen();
    }

    setIsRunning(true);

    timerRef.current = setInterval(() => {
      const currentCpu = cpuRef.current;

      if (currentCpu.hasPendingWork()) {
        currentCpu.clock();
        syncScreen();
      } else {
        stopAuto();
      }
    }, 1000);
  }

  function resetAll() {
    stopAuto();

    cpuRef.current.reset();

    syncScreen();
  }

  useEffect(() => {
    return () => stopAuto();
  }, []);

  return (
    <div className="app">
      <h1>Simulador de CPU</h1>

      <p className="subtitle">
        Cada clique em <strong>Próximo Ciclo</strong> representa um ciclo de
        clock da CPU.
      </p>

      <Editor code={code} setCode={setCode} />

      <Controls
        onLoad={loadProgram}
        onStep={stepProgram}
        onRun={runAuto}
        onReset={resetAll}
        isRunning={isRunning}
      />

      <Registers registers={registers} pc={pc} />

      <PipelineView pipeline={pipeline} />
    </div>
  );
}

export default App;