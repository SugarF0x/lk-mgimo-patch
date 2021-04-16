/*
.lesson__type .badge {
    white-space: normal;
    text-align: left;
}
 */

if (window.location.pathname === '/') {
  /**
   * Add break line to lesson__type column
   * so that long class names don't overflow
   */
  const style = document.createElement('style')
  style.innerText = `
    .lesson__type .badge {
        white-space: normal;
        text-align: left;
    }
  `
  document.querySelector('head').appendChild(style)

  /**
   * Fix whitespaces after opening quite in lesson__type column
   * Fix accidental typos (2 instead of " before spec name)
   */
  Array.from(document.querySelectorAll(".lesson__type .badge")).forEach(node => {
    node.innerText = node.innerText.replace(/профиль 2/gi, 'профиль "')
    node.innerText = node.innerText.replace(/" /g, '"')
  })

  console.log('[LMP] Home fixed')
}

export default true