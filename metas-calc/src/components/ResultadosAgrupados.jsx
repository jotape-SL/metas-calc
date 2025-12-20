import ResultadoMetasPrintable from "./ResultadoMetasPrintable";
import ResultadoMetas from "./ResultadoMetas";

export default function ResultadosAgrupados({ metas }) {
    return (
        <>
            <ResultadoMetas metas={metas} />
            <ResultadoMetasPrintable metas={metas} />
        </>
    )
}