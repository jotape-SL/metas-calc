export function parseDinheiro(valor) {
    return Number(
        valor
            .replace(/\./g, '')
            .replace(',', '.')
    );
}
