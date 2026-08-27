export function parseCurrencyAmount(value: string): number {
    const amount = Number(value.replace(/[^0-9.-]/g, ''));

    if (Number.isNaN(amount)) {
        throw new Error(`Unable to parse currency amount: ${value}`);
    }

    return amount;
}
