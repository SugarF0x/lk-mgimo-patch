/**
 * Set global overflow to Auto
 */
document.querySelector('body').style.overflow = "auto"
document.querySelector('html').style.overflow = "auto"

/**
 * Remove ID, CLASS and STYLE attributes from nav & container elements
 */
Array.from([
  document.querySelector("#mCSB_1"), // container
  document.querySelector("#mCSB_2"), // nav bar
]).forEach(node => {
  node.removeAttribute('id')
  node.removeAttribute('class')
  node.removeAttribute('style')
})

console.log('[LMP] Scrollbar fixed')

export default true