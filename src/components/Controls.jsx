export default function Controls({
  onLoad,
  onStep,
  onRun,
  onReset,
  isRunning,
}) {
  return (
    <div className="controls-box">
      <button onClick={onLoad}>Carregar Programa</button>

      <button onClick={onStep}>Próximo Ciclo</button>

      <button onClick={onRun} disabled={isRunning}>
        {isRunning ? "Executando..." : "Executar Automático"}
      </button>

      <button onClick={onReset}>Resetar</button>
    </div>
  );
}