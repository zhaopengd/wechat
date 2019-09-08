// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg : " 我是初始化的数据" ,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.msg)
    // 小程序中修改数据：this.setData() 和react类似
    // 小程序中的数据流是单向的
    // 执行到此的时候 页面已经出来了 在此处发送请求
    wx.getUserInfo({
      success:(data)=>{
        console.log(data.userInfo);
        this.setData({ // 注意this指向 采用箭头函数
          userInfo:data.userInfo
        })
      },
      fail:function(){
        console.log('获取用户信息失败')
      }
    })
  },
  handleGetUserInfo(info){
    console.log(info)
    // 判断用户点击是否是允许
    if(info.detail.rawData){// 此时返回的数据是一个JSON格式
      // 修改 状态
      this.setData({
        userInfo: JSON.parse(info.detail.rawData)
      })
    }
   
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