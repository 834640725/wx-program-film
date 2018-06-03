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
  },

  //前往播放记录
  goRecordUser(){
    let n = JSON.stringify(this.data.moviesList);
    wx.navigateTo({
      url: `/record/record?j=${n}`,
    })
  },

 // 从用户页进入播放记录,清空data中存的播放记录数据。
 // 若进入 user 页 触发onShow 重新从webStore中取新数据。
  onHide(){
    this.setData({
      moviesList:[],
    })
  }
})