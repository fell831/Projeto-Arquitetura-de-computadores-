export default function Editor({ code, setCode }) {
  return (
    <div>
      <h2>Editor Assembly</h2>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
      />
    </div>
  );
}