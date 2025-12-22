import { parseDinheiro } from "./parseDinheiro";

export function calcularMetas(metaIntegral, vendidoNaSemana, diasRestantes) {
    const m = Number(parseDinheiro(metaIntegral));
    const v = Number(parseDinheiro(vendidoNaSemana));
    const d = parseInt(diasRestantes, 10);

    if (!d || d <= 0) return null;

    const calc = (porcentagem) => Math.round((((m * porcentagem) - v) / d) * 100) / 100;

    return {
        meta85: calc(0.85),
        meta90: calc(0.90),
        meta95: calc(0.95),
        meta100: calc(1.00),
        meta105: calc(1.05),
        meta110: calc(1.10),
    };
}


