export default function Editor({ code, setCode }) {
  return (
    <div className="editor-box">
      <h2>Editor Assembly</h2>

      <div className="commands-bar">
        <span>MOV</span>
        <span>ADD</span>
        <span>SUB</span>
        <span>STORE</span>
        <span>LOAD</span>
      </div>

      <textarea
        className="assembly-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`MOV R1, 14
STORE R1, 0

MOV R2, 78
STORE R2, 1

LOAD R3, 0
ADD R3, R2
STORE R3, 2`}
      />
    </div>
  );
}