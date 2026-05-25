export function parseProgram(code) {

  return code
    .split("\n")

    .map(line => line.trim())

    .filter(line => line !== "")

    .map(line => {

      const parts = line.split(" ");

      const opcode = parts[0];

      const args = parts[1]
        ? parts[1].split(",").map(arg => arg.trim())
        : [];

      return {
        opcode,
        args,
      };

    });

}