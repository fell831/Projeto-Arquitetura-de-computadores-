export function parseProgram(code) {

  const lines = code.split("\n");

  return lines.map(line => {

    const cleanLine = line.trim();

    const [opcode, ...rest] = cleanLine.split(" ");

    const args = rest.join(" ")
      .split(",")
      .map(arg => arg.trim());

    return {
      opcode,
      args
    };

  });

}