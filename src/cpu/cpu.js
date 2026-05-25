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

}