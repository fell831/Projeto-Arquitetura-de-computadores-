export default function Controls({ onRun, onStep }) {

  return (
    <div>

      <button onClick={onRun}>
        Executar
      </button>

      <button onClick={onStep}>
        Próximo Passo
      </button>

    </div>
  );

}