// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[],
     start:0,
     count:6,
     loader:false,
  },
  onLoad(){
    this.loadMovies();
  },
  loadMovies(){
    this.setData({loader:true})
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
          // 上映日期格式转换
          data.subjects[i].mainland_pubdate = data.subjects[i].mainland_pubdate.split('-').join('/');
          data.subjects[i+1].mainland_pubdate = data.subjects[i].mainland_pubdate.split('-').join('/');         
          arr.push([data.subjects[i], data.subjects[i+1]])

        }
        this.setData({
          list:arr,
          loader:false,
        })
        console.log(this.data.list)
      }
    })
  },

  scrollHandler(){
    //拖动到底部显示loading,且数据增加两条
    this.setData({
      loader:true,
      count:this.data.count += 4,
    })
    console.log(this.data.count)
     this.loadMovies(); 
  }
})