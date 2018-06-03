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

     // 开启导航条加载动画
     wx.showNavigationBarLoading();
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
          
          //动态设置电影详情setNavigationBarTitle
          wx.setNavigationBarTitle({
            title: this.data.moviesData.title,
          })

          //数据回来之后隐藏加载动画
          wx.hideNavigationBarLoading();
          //请求成功同步数据
          // console.log(this.data.moviesData)
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