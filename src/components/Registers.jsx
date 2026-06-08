export default function Registers({ registers, pc }) {
  return (
    <div className="registers-box">
      <h2>Registradores</h2>

      <div className="pc-box">
        <span>PC</span>
        <strong>{pc}</strong>
      </div>

      <div className="registers-grid">
        <div className="register-card">
          <span>R0</span>
          <strong>{registers.R0}</strong>
        </div>

        <div className="register-card">
          <span>R1</span>
          <strong>{registers.R1}</strong>
        </div>

        <div className="register-card">
          <span>R2</span>
          <strong>{registers.R2}</strong>
        </div>

        <div className="register-card">
          <span>R3</span>
          <strong>{registers.R3}</strong>
        </div>
      </div>
    </div>
  );
}