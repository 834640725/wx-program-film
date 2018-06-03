// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
    moviesList:[],  //观看记录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      lang:"zh_CN ",  //用户信息语言
      success:((data) => {
        this.setData({
          userData: data.userInfo,
        })

        console.log(this.data.userData)
      })
    })
  },

  onShow(){

    // Get into this page and pick up the cached data
    wx.getStorage({
      key: 'looklist',
      success:(({data}) => {
        this.setData({
          moviesList:data,
        })
      })
    })
  }
})