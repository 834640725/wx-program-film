// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
    moviesList:[],  //观看记录
    isShouquan:false,  //用户授权获取信息
    title:"请授权获取您的个人信息",
    state:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },


  /**
   * 用户授权登陆
   * button 按钮 
   * open-type="getUserInfo" type='primary' bindgetuserinfo="userHander"
   * userHander 侦听后，用wx.getUserInfo 获取用户信息
   * confirm
   */
  confirm(){
      wx.getUserInfo({
        lang: "zh_CN ",  //用户信息语言
        success: ((data) => {
          this.setData({
            userData: data.userInfo,
            isShouquan: true,
            state:false,
          })
        })
      })

      // 缓存登陆状态
      wx.setStorage({
        key: 'login',
        data: true,
      })
  },

  /**
   * 用户授权登陆
   */
  userHander(){
    this.confirm()
  },
  

  onShow(){
    wx.getStorage({
      key: 'login',
      success: (({data}) => {
        /**
         * 每次进入前台，从缓存中取出用户是否登陆。
         * 如果已经登陆
         */
        if(data){
          this.confirm();
        }else{
          wx.setStorage({
            key: 'login',
            data: false,
          })
        }

         this.setData({
           isShouquan:data,
         })
      })
    })

  // 观看记录
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

  /**
   * 如果当前用户为登陆状态，则将播放记录的数据传递过去。
   * 如果用户没有登陆，则传递空数据。
   */

    let n;
    if (this.data.isShouquan){
       n = JSON.stringify(this.data.moviesList);
    }else{
      n = '[]';
    }

    wx.navigateTo({
      url: `/record/record?j=${n}`,
    })
  },

 // 从用户页进入播放记录,清空data中存的播放记录数据。
 // 若进入 user 页 触发onShow 重新从webStore中取新数据。
  onHide(){
    this.setData({
      moviesList:[],
      state:false,  //如果正在授权登陆中切换,授权失败。
    })
  },

  // 进入收藏
  goCollection(){
    wx.navigateTo({
      url: '/collection/collection',
    })
  },

  // setTing
  goSetting(){
    wx.navigateTo({
      url: '/setting/setting',
    })
  },

  // 显示确认弹窗
  showMessage(){
    this.setData({
       state:true,
    })
  },

  // 取消授权
  bindHander(){
    this.setData({
      state:false,
    })
  },


})