export function formateDinheiro(value) {
    const numeric = value.replace(/\D/g, '');
    const number = (Number(numeric) / 100).toFixed(2);

    return number
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
