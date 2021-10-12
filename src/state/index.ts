import { ref, watch, computed } from 'vue'
import { isPrime, isFibonacci } from '../utils'

export const numberInput = ref<number>()
export const calculationInput = ref<'isPrime' | 'isFibonacci'>('isPrime')

watch(numberInput, (v) => {
  if (v) {
    (v === Math.abs(v))
      ? numberInput.value = Math.round(v)
      : numberInput.value = 1
  }
}) 

export const isNumberValidCalculation = computed(() => {
  switch (calculationInput.value) {
    case 'isPrime': return isPrime(numberInput.value)
    case 'isFibonacci': return isFibonacci(numberInput.value)
    default: return false
  }
})