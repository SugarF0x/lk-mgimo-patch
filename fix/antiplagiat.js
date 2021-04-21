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

  /**
   * Move AP Entry action buttons to the top
   * Works only on Entry Table
   */
  if (/^\/antiplagiat\/[0-9]+$/.test(window.location.pathname)) {
    const pdf = document.querySelector('.btn.btn-primary.btn-sm')
    const del = document.querySelector('.btn.btn-danger.btn-sm')
    const card = document.querySelector('.card')

    card.children[0].appendChild(pdf)
    card.children[0].appendChild(del)

    const style = document.createElement('style')
    style.innerText = `
      .card-heading {
        display: flex;
      }
      .card-heading :nth-child(2) {
        margin-left: auto;
        margin-right: 10px;
      }
    `
    document.querySelector('head').appendChild(style)
  }

  console.log('[LMP] Antiplagiat table fixed')
}

export default true