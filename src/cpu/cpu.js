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
  }

  loadProgram(program) {

    this.program = program;

    this.pc = 0;
  }

  step() {

    const instruction = this.program[this.pc];

    if (!instruction) return;

    executeInstruction(this, instruction);

    this.pc++;
  }

}