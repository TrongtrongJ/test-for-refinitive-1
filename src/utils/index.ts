export const calculationSelections = ['isPrime', 'isFibonacci'] as const

function isPerfectSquare(x: number) {
  let s = Math.sqrt(x)
  return (s * s == x)
}
 
/* export function isFibonacci(n: string | number | undefined) {
  if (!n) return false
  if (typeof n !== 'number') n = parseInt(n)
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)
} */

export function isFibonacci(n: string | number | undefined) {
  if (!n) return false
  if (typeof n !== 'number') n = parseInt(n)

  const base = (5 * Math.pow(n, 2))
  const posBias = (Math.sqrt(base + 4)) % 1 === 0
  const negBias = (Math.sqrt(base - 4)) % 1 === 0

  if (posBias || negBias){
    return true
  }
  return false
}

export function isPrime(n: string | number | undefined) {
  if (!n) return false
  if (typeof n !== 'number') n = parseInt(n)
  if (n <= 1) return false
  if (n === 2) return true

  const sqrt = Math.sqrt(n)

  for (var i = 2; i <= sqrt; i++) if (n % i === 0) return false

  return true
}