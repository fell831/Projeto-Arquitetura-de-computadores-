export default function Registers({ registers }) {
  return (
    <div>
      <h2>Registradores</h2>

      {Object.entries(registers).map(([name, value]) => (
        <p key={name}>
          {name}: {value}
        </p>
      ))}
    </div>
  );
}