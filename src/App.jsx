import { useState } from "react";

import Editor from "./components/Editor";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import PipelineView from "./components/PipelineView";

import { CPU } from "./cpu/cpu";
import { parseProgram } from "./cpu/parser";

const cpu = new CPU();

function App() {

  const [code, setCode] = useState(
`MOV R1, 5
MOV R2, 10
ADD R1, R2`
  );

  const [registers, setRegisters] = useState(cpu.registers);

  const [pipeline, setPipeline] = useState(cpu.pipeline);

  function runProgram() {

    const parsedProgram = parseProgram(code);

    cpu.loadProgram(parsedProgram);

    while (cpu.pc < cpu.program.length) {

      cpu.step();

    }

    setRegisters({ ...cpu.registers });

    setPipeline({ ...cpu.pipeline });

  }

  function stepProgram() {

    if (cpu.program.length === 0) {

      const parsedProgram = parseProgram(code);

      cpu.loadProgram(parsedProgram);

    }

    cpu.step();

    setRegisters({ ...cpu.registers });

    setPipeline({ ...cpu.pipeline });

  }

  return (
    <div>

      <h1>Simulador de CPU</h1>

      <Editor
        code={code}
        setCode={setCode}
      />

      <Controls
        onRun={runProgram}
        onStep={stepProgram}
      />

      <Registers
        registers={registers}
      />

      <PipelineView
        pipeline={pipeline}
      />

    </div>
  );

}

export default App;