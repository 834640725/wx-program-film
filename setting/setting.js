// setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    title:"是否退出登陆",
    tip:"退出后会停留在此页",
    state:false,
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
    if (this.data.isLogin){
        this.setData({
          state: true,
        })
    }
  },

  // 取消退出
  bindHander(){
    this.setData({
      state:false,
    })
  },

  //确认退出
  confirm(){
    console.log(1)
    wx.setStorage({
      key: 'login',
      data: false,
    })

    this.setData({
      state: false,
      isLogin:false,
    })
  } 
})