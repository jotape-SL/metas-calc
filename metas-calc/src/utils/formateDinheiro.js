export function formateDinheiro(value = 0) {
    if (typeof value === 'number') {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    const numeric = value.replace(/\D/g, '');
    const number = (Number(numeric) / 100).toFixed(2);

    return number
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
