function ResultadoMetas({ metas }) {
    return (
        <>
            <section>
                <h2>Valores de 90% da meta</h2>
                <h3>Cheio: {metas.meta90}</h3>
                <h3>Considerado: {metas.meta85}</h3>
            </section>
            <section>
                <h2>Valores de 100% da meta</h2>
                <h3>Cheio: {metas.meta100}</h3>
                <h3>Considerado: {metas.meta95}</h3>
            </section>
            <section>
                <h2>Valores de 90% da meta</h2>
                <h3>Cheio: {metas.meta110}</h3>
                <h3>Considerado: {metas.meta105}</h3>
            </section>
        </>
    );
}

export default ResultadoMetas;
