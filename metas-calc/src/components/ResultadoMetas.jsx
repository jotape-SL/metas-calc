function ResultadoMetas({ metas }) {
    return (
        <>
            <h2>85%: {metas.meta85}</h2>
            <h2>90%: {metas.meta90}</h2>
            <h2>95%: {metas.meta95}</h2>
            <h2>100%: {metas.meta100}</h2>
            <h2>105%: {metas.meta105}</h2>
            <h2>110%: {metas.meta110}</h2>
        </>
    );
}

export default ResultadoMetas;
