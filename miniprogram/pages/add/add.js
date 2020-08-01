// 添加新垃圾
let DB = wx.cloud.database()
let dataList = []
let content = null
Page({
  data: {
    index: 0,
    nameList: []
  },
  //入口
  onLoad() {
    DB.collection('sort').get()
      .then(res => {
        console.log("请求垃圾分类成功", res)
        dataList = res.data
        let list = []
        dataList.forEach(item => {
          list.push(item.name)
        })
        this.setData({
          nameList: list
        })
      }).catch(res => {
        console.log("请求垃圾分类失败", res)
      })
  },
  //选择属于哪类垃圾
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //输入物品名
  getData(event) {
    console.log("输入的内容", event.detail.value)
    content = event.detail.value
  },
  //提交数据
  submit() {
    console.log("点击了提交按钮")
    if (content) {
      let index = this.data.index
      DB.collection("product").add({
          data: {
            sortId: dataList[index]._id,
            name: content
          }
        })
        .then(res => {
          console.log("提交成功", res)
          wx.showToast({
            title: '提交成功',
          })
        }).catch(res => {
          console.log("提交失败", res)
        })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请输入物品名',
      })
    }
  }



})