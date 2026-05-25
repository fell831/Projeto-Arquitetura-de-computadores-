import { Pipeline } from "./pipeline";
import { executeInstruction } from "./instructions";

export class CPU {

  constructor() {

    this.registers = {
      R0: 0,
      R1: 0,
      R2: 0,
      R3: 0,
    };

    this.pc = 0;

    this.program = [];

    this.pipeline = new Pipeline();

  }

  loadProgram(program) {

    this.program = program;

    this.pc = 0;

  }

  step() {

    const instruction = this.program[this.pc];

    if (!instruction) return;

    this.pipeline.writeback = this.pipeline.execute;

    this.pipeline.execute = this.pipeline.decode;

    this.pipeline.decode = this.pipeline.fetch;

    this.pipeline.fetch =
      `${instruction.opcode} ${instruction.args.join(", ")}`;

    executeInstruction(this, instruction);

    this.pc++;

  }

}