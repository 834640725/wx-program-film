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
     types:'',
     scrollTop:0,
  },
  onLoad(options){
    let types = options.ask ||'in_theaters';
    this.setData({
      types,
    })
    this.loadMovies();
  },
  loadMovies(){
    this.setData({loader:true})
    wx.request({
      url: `https://douban.uieee.com/v2/movie/${this.data.types}&start=${this.data.start}&count=${this.data.count}`,
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
  },

  // 跳转页
  gotoHander(e){
    let movesId = e.currentTarget.dataset.moveid;
    //跳转电影详情页
    wx.navigateTo({
       url: '/pages/movieInfo/movieInfo?id=' + movesId,
    })
  },

  // 点击时滚动条滚动为0
  onTabItemTap(){
    this.setData({
      scrollTop:0,
    })  
  },

  // 下拉刷新
  onPullDownRefresh:function(){
    setTimeout(() => {
      wx.stopPullDownRefresh()
    },500)
  }
})