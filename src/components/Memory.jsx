export default function Memory({ memory }) {
  return (
    <div className="memory-box">
      <h2>Memória RAM</h2>

      <div className="memory-grid">
        {memory.map((value, index) => (
          <div className="memory-cell" key={index}>
            <div className="memory-address">
              [{index}]
            </div>

            <div className="memory-value">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}