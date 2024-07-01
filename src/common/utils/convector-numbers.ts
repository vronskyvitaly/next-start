/**
 * A function that takes a number and returns it in price format
 * @param num
 */
export function convectorNumberUtil(num: number) {
  return num.toLocaleString('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  })
}
