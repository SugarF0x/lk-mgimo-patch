/**
 * This is a workaround to use modules in Chrome Extensions
 */
(async () => {
  const src = chrome.extension.getURL('fix/index.js');
  const contentScript = await import(src);
})();