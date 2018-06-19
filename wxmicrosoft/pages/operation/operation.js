// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaId: undefined,
    areaName: '',
    priority: '',
    addUrl: 'http://127.0.0.1:8082/add',
    modifyUrl: 'http://127.0.0.1:8082/edit'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var areaId=options.areaId;
    this.setData({ areaId: areaId });
    if (options.areaId = undefined) {
      return;
    }
    wx.request({
      url: 'http://127.0.0.1:8082/get',
      method: 'GET',
      data: { areaId: areaId },
      success: function (res) {
        var area = res.data.area;
        if (area == undefined) {
          var toastText = "获取数据失败" + res.data.errMsg;
          wx.showToast({
            title: toastText,
            duration: 2000
          });
        } else {
          that.setData({ areaId:area.areaId, areaName:area.areaName, priority:area.priority });
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})