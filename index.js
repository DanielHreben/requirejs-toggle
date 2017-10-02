if (window.__requirejsToggleBackup) {
  console.log('▶ Enabling requirejs')
  Object.assign(window, window.__requirejsToggleBackup)
  delete window.__requirejsToggleBackup
} else {
  console.log('⏹ Disabling requirejs')
  window.__requirejsToggleBackup = {
    define: window.define,
    require: window.require,
    requirejs: window.requirejs
  }

  for (const field of Object.keys(window.__requirejsToggleBackup)) {
    window[field] = undefined
  }
}