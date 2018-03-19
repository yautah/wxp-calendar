// pages/checkin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  

  onLoad(options) {
    const {checkin, checkout} = options
    this.setData({
      checkInOn: checkin,
      checkOutOn: checkout
    })
  },

  handleConfirmDate(e) {
    getApp().setFlash("check", e.detail)    
    wx.navigateBack({
      
    })
  }
})