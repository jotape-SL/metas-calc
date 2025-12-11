
export function calcularMetas(metaIntegral, vendidoNaSemana, diasRestantes) {
    const m = Number(metaIntegral);
    const v = Number(vendidoNaSemana);
    const d = Number(diasRestantes);

    const calc = (porcentagem) => ((m * porcentagem) - v) / d;

    return {
        meta85: calc(0.85),
        meta90: calc(0.90),
        meta95: calc(0.95),
        meta100: calc(1.00),
        meta105: calc(1.05),
        meta110: calc(1.10),
    };
}


