export default function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    const context = this

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
