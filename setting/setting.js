// setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'login',
      success: (({data}) => {
         this.setData({
           isLogin:data,
         })
         console.log(this.data.isLogin)
      })
    })
  },


  /**
   * 只有当前为登陆状态时才可退出
   */
  dropOut(){
    if(this.data.isLogin){
       wx.setStorage({
         key: 'login',
         data: false,
       })
    }
  }
})