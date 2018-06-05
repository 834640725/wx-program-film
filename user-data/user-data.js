// user-data/user-data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = JSON.parse(options.data);
    this.setData({
      userData:data,
    })
    
    console.log(this.data.userData)
  },
})