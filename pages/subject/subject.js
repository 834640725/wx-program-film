// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     type:[
       {
         title:"正在热映",
         ask:"in_theaters",
         url:"aiqing.png"
       },
       {
         title: "即将上映",
         ask: "coming_soon",
         url: "donghua.png"
       },
       {
         title: "Top250",
         ask: "top250",
         url: "dongzuo.png"
       },
       {
         title: "口碑榜",
         ask: "weekly",
         url: "xiju.png"
       },
       {
         title: "北美票行榜",
         ask: "us_box",
         url: "kehuan.png"
       }
     ]
    //  4191645
    // v2/movie/search?q={text}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 跳转专栏页
  totypeHander(e){
    let ask = e.currentTarget.dataset.ask;
    console.log(ask)
    wx.navigateTo({
      url: `/subject-movies-types/subject-movies-types?ask=${ask}`,
    })
  }
})