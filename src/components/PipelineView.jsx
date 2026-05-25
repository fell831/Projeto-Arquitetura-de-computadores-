export default function PipelineView({ pipeline }) {

  return (

    <div>

      <h2>Pipeline</h2>

      <p>
        FETCH: {pipeline.fetch || "vazio"}
      </p>

      <p>
        DECODE: {pipeline.decode || "vazio"}
      </p>

      <p>
        EXECUTE: {pipeline.execute || "vazio"}
      </p>

      <p>
        WRITEBACK: {pipeline.writeback || "vazio"}
      </p>

    </div>

  );

}