export default function Registers({ registers, pc }) {
  return (
    <div className="registers-box">
      <h2>Registradores</h2>

      <p>
        <strong>PC:</strong> {pc}
      </p>

      <p>R0: {registers.R0}</p>
      <p>R1: {registers.R1}</p>
      <p>R2: {registers.R2}</p>
      <p>R3: {registers.R3}</p>
    </div>
  );
}