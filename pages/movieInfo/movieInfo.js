// pages/movieInfo/movieInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesData:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let Id = options.id;
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/subject/' + Id,
       method:"GET",
       header:{
         'Content-Type': 'json',
       },
       success:(({data}) => {
          this.setData({
            moviesData:data,
          })
          //请求成功同步数据
          console.log(this.data.moviesData)
       })
     })
  },

  yugaoHander(e){
      let Id = e.currentTarget.dataset.id;

      wx.navigateTo({
        url: '/pages/yugao/yugao?id=' + Id,
      })
  }
})