// record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = JSON.parse(options.j) || [];
    
    this.setData({
      list:data,
    })

    console.log(this.data.list)
  },


  // 继续播放当前的视频
  yugao(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/yugao/yugao?id=${id}`,
    })
  },

  // 删除播放记录
  deleteHander(){
    wx.setStorage({
      key: 'looklist',
      data: [],
    })
    this.setData({
      list:[],
    })
  }
})