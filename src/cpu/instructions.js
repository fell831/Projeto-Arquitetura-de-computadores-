export function executeInstruction(cpu, instruction) {
  const { opcode, args } = instruction;

  let result = null;

  switch (opcode) {

    case "MOV":
      cpu.registers[args[0]] = Number(args[1]);
      result = cpu.registers[args[0]];
      break;

    case "ADD":

      if (args[1].startsWith("R")) {
        cpu.registers[args[0]] += cpu.registers[args[1]];
      } else {
        cpu.registers[args[0]] += Number(args[1]);
      }

      result = cpu.registers[args[0]];
      break;

    case "SUB":

      if (args[1].startsWith("R")) {
        cpu.registers[args[0]] -= cpu.registers[args[1]];
      } else {
        cpu.registers[args[0]] -= Number(args[1]);
      }

      result = cpu.registers[args[0]];
      break;

    case "STORE":
      cpu.memory[Number(args[1])] = cpu.registers[args[0]];
      break;

    case "LOAD":
      cpu.registers[args[0]] = cpu.memory[Number(args[1])];
      result = cpu.registers[args[0]];
      break;

    default:
      console.log("Instrução inválida:", opcode);
  }

  if (result !== null) {

    cpu.memory[cpu.memoryPointer] = result;

    cpu.memoryPointer++;

    if (cpu.memoryPointer >= cpu.memory.length) {
      cpu.memoryPointer = 0;
    }

  }
}