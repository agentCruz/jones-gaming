//formatter for currency. Source: https://flaviocopes.com/how-to-format-number-as-currency-javascript/
export const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
})