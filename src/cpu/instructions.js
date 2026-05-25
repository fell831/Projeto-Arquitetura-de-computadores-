export function executeInstruction(cpu, instruction) {

  const { opcode, args } = instruction;

  switch (opcode) {

    case "MOV":

      cpu.registers[args[0]] = Number(args[1]);

      break;

    case "ADD":

      cpu.registers[args[0]] += cpu.registers[args[1]];

      break;

    case "SUB":

      cpu.registers[args[0]] -= Number(args[1]);

      break;

    default:

      console.log("Instrução inválida");

  }

}