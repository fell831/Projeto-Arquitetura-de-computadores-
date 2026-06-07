function formatInstruction(instruction) {
  if (!instruction) {
    return "vazio";
  }

  return `${instruction.opcode} ${instruction.args.join(", ")}`;
}

export default function PipelineView({ pipeline }) {
  return (
    <div className="pipeline-box">
      <h2>Pipeline da CPU</h2>

      <div className="pipeline-grid">
        <div className={`stage ${pipeline.fetch ? "active" : ""}`}>
          <h3>FETCH</h3>
          <span>Busca da instrução</span>
          <p>{formatInstruction(pipeline.fetch)}</p>
        </div>

        <div className={`stage ${pipeline.decode ? "active" : ""}`}>
          <h3>DECODE</h3>
          <span>Decodificação</span>
          <p>{formatInstruction(pipeline.decode)}</p>
        </div>

        <div className={`stage ${pipeline.execute ? "active" : ""}`}>
          <h3>EXECUTE</h3>
          <span>Execução da operação</span>
          <p>{formatInstruction(pipeline.execute)}</p>
        </div>

        <div className={`stage ${pipeline.writeback ? "active" : ""}`}>
          <h3>WRITEBACK</h3>
          <span>Escrita do resultado</span>
          <p>{formatInstruction(pipeline.writeback)}</p>
        </div>
      </div>
    </div>
  );
}