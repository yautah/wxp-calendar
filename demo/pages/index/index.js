import utils from "../../utils/util.js"
Page({
  onShow: function() {
    const check = getApp().getFlash('check')
    if(check) {
      this.setData({ 
        check: {
          checkInOn: check.checkInOn,
          checkOutOn: check.checkOutOn,
          checkInDate: utils.formatTime(new Date(check.checkInOn), 'yyyy-MM-dd'),
          checkOutDate: utils.formatTime(new Date(check.checkOutOn), 'yyyy-MM-dd'),
        }
      })
    }
  },

  
})

