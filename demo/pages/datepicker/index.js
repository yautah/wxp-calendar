// pages/datepicker/index.js
Page({

  handleSelectDate(e) {
    const {date} = e.detail
    wx.showModal({
      title: '当前选择',
      content: date,
    })
  }
})