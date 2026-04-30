import ResultadoMetasPrintable from "./ResultadoMetasPrintable";
import ResultadoMetasPrintableSistemaPreso from "./ResultadoMetasPrintableSistemaPreso";
import ResultadoMetas from "./ResultadoMetas";

export default function ResultadosAgrupados({ metas }) {
    return (
        <>
            <ResultadoMetas metas={metas} />
            {/* <ResultadoMetasPrintable metas={metas} /> */}
            <ResultadoMetasPrintableSistemaPreso metas={metas} />
        </>
    )
}