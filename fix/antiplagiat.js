if (window.location.pathname.includes('antiplagiat')) {
  /**
   * Add break line to the first column of AP table
   * so that file names don't overflow
   */
  const style = document.createElement('style')
  style.innerText = `
    .table-flex-body-row > div:first-of-type {
      word-break: break-all;
    }
  `
  document.querySelector('head').appendChild(style)

  /**
   * Remove excess STATUS column header
   */
  document.querySelector('.table-flex-head > div:nth-of-type(5)')?.remove()

  /**
   * Flip table order to display latest entries on top
   * Works only on Files Table
   */
  if (window.location.pathname === '/antiplagiat') {
    const table = document.querySelector('.table-flex-body')
    const children = Array.from(table.children).reverse()
    table.innerHTML = ''
    children.forEach(e => table.appendChild(e))
  }

  console.log('[LMP] Antiplagiat table fixed')
}

export default true