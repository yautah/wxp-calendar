//app.js
App({
  flash: {},

  setFlash(key, v) {
    this.flash[key] = v
  },

  getFlash(k) {
    const value = this.flash[k]
    delete this.flash[k]
    return value
  },
  onLaunch: function () {
  }
})