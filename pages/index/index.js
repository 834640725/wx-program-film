// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[],
  },
  onLoad(){
    this.loadMovies();
  },
  loadMovies(){
    wx.request({
      url:"https://douban.uieee.com/v2/movie/in_theaters",
      method:"GET",
      header:{
        'Content-Type': 'json',
      },
      success:({data}) => {
        this.setData({
          list:data
        })
        // get data sive in data.list
        console.log(this.data.list)
      }
    })
  }

})