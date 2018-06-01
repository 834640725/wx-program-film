// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[],
     start:0,
     count:8,
  },
  onLoad(){
    this.loadMovies();
  },
  loadMovies(){
    wx.request({
      url:`https://douban.uieee.com/v2/movie/in_theaters?start=${this.data.start}&count=${this.data.count}`,
      method:"GET",
      header:{
        'Content-Type': 'json',
      },
      success:({data}) => {
        let arr = [];
        for (let i = 0; i < data.subjects.length; i+=2){
          //将没两个对象放进一个数组中
          arr.push([data.subjects[i], data.subjects[i+1]])
        }
        this.setData({
          list:arr,
        })
        console.log(this.data.list)
      }
    })
  }

})