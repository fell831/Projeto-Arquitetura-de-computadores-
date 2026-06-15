function formatInstruction(instruction) {
  if (!instruction) return "-";
  return `${instruction.opcode} ${instruction.args.join(", ")}`;
}

export default function ExecutionMemory({ executedMemory, onSendToPipeline }) {
  return (
    <div className="execution-memory-box">
      <h2>Memória de Execução</h2>

      <p className="execution-memory-subtitle">
        Histórico das instruções já executadas pela CPU.
      </p>

      {executedMemory.length === 0 ? (
        <div className="execution-empty">
          Nenhuma instrução executada ainda.
        </div>
      ) : (
        <div className="execution-screen">
          {executedMemory.map((item, index) => (
            <div className="execution-item" key={item.id}>
              <div className="execution-info">
                <strong>{formatInstruction(item.instruction)}</strong>
                <span>Resultado: {item.result}</span>
              </div>

              <button onClick={() => onSendToPipeline(index)}>
                Enviar ao Pipeline
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}