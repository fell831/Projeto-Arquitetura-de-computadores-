import { executeInstruction } from "./instructions";
import { Pipeline } from "./pipeline";

export class CPU {
  constructor() {
    this.registers = {
      R0: 0,
      R1: 0,
      R2: 0,
      R3: 0,
    };

    this.memory = [0, 0, 0, 0, 0, 0, 0, 0];
    this.memoryPointer = 0;

    this.executedMemory = [];
    this.executionId = 1;

    this.executedMemory = [];
    this.executionId = 1;

    this.pc = 0;
    this.program = [];
    this.pipeline = new Pipeline();
  }

  reset() {
    this.registers = {
      R0: 0,
      R1: 0,
      R2: 0,
      R3: 0,
    };

    this.memory = [0, 0, 0, 0, 0, 0, 0, 0];
    this.memoryPointer = 0;

    this.executedMemory = [];
    this.executionId = 1;

    this.pc = 0;
    this.program = [];
    this.pipeline.clear();
  }

  loadProgram(program) {
    this.reset();
    this.program = program;
  }

  hasPendingWork() {
    return (
      this.pc < this.program.length ||
      this.pipeline.fetch !== null ||
      this.pipeline.decode !== null ||
      this.pipeline.execute !== null ||
      this.pipeline.writeback !== null
    );
  }

  saveExecution(instruction, result) {
    const data = {
      id: this.executionId++,
      instruction: {
        opcode: instruction.opcode,
        args: [...instruction.args],
      },
      result,
    };

    this.executedMemory.unshift(data);

    if (this.executedMemory.length > 8) {
      this.executedMemory.pop();
    }
  }

  sendExecutedToPipeline(index) {
    const item = this.executedMemory[index];

    if (!item) return;

    const instructionCopy = {
      opcode: item.instruction.opcode,
      args: [...item.instruction.args],
    };

    this.program.splice(this.pc, 0, instructionCopy);
  }

  clock() {
    const nextWriteback = this.pipeline.execute;
    const nextExecute = this.pipeline.decode;
    const nextDecode = this.pipeline.fetch;

    const nextFetch =
      this.pc < this.program.length
        ? this.program[this.pc]
        : null;

    this.pipeline.writeback = nextWriteback;
    this.pipeline.execute = nextExecute;
    this.pipeline.decode = nextDecode;
    this.pipeline.fetch = nextFetch;

    if (nextFetch) {
      this.pc++;
    }

    if (nextWriteback) {
      executeInstruction(this, nextWriteback);
    }
  }
}