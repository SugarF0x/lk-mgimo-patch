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

  console.log('[LMP] Antiplagiat table fixed')
}

export default true