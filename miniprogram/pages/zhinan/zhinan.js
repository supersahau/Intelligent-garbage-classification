//数据
let dataList = [{
    idx: 0,
    _laji_biao: '_laji-biao0',
    content_bg_color: 'content0',
    content_img: '../../images/RecycleableWaste.jpg',
    title: '可回收物',
    gainian: '是指，适宜回收利用和资源化利用的生活废弃物，如废纸张、废塑料、废玻璃制品、废金属、废织物等。',
    baokuo: '可回收物主要包括：',
    baokuo_content: '报纸、纸箱、书本、广告单、塑料瓶、塑料玩具、油桶、酒瓶、玻璃杯、易拉罐、旧铁锅、旧衣服、包、旧玩偶、旧数码产品、旧家电。',
    yaoqiu: '可回收物投放要求',
    yaoqiu_content: '• 轻投轻放\n • 清洁干燥、避免污染，废纸尽量平整\n • 立体包装请清空内容物，清洁后压扁投放 \n • 有尖锐边角的，应包裹后投放',
  },
  {
    idx: 1,
    _laji_biao: '_laji-biao1',
    content_bg_color: 'content1',
    content_img: '../../images/HouseholdfoodWaste.jpg',
    title: '湿垃圾',
    gainian: '是指，日常生活垃圾产生的容易腐烂的生物质废弃物。',
    baokuo: '湿垃圾主要包括：',
    baokuo_content: '食材废料、剩饭剩菜、过期食品、蔬菜水果、瓜皮果核、花卉绿植、中药残渣等。',
    yaoqiu: '湿垃圾投放要求',
    yaoqiu_content: '• 纯流质的食物垃圾，如牛奶等，应直接倒进下水口 \n • 有包装物的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器',
  },
  {
    idx: 2,
    _laji_biao: '_laji-biao2',
    content_bg_color: 'content2',
    content_img: '../../images/ResidualWaste.png',
    title: '干垃圾',
    gainian: '是指，除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物。',
    baokuo: '干垃圾主要包括：',
    baokuo_content: '餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、食品包装袋、污染严重的纸、烟蒂、纸尿裤、一次性杯子、大骨头、贝壳、花盆等。',
    yaoqiu: '干垃圾投放要求',
    yaoqiu_content: '• 尽量沥干水分\n • 难以辨识类别的生活垃圾投入干垃圾容器内',
  },
  {
    idx: 3,
    _laji_biao: '_laji-biao3',
    content_bg_color: 'content3',
    content_img: '../../images/HazardouAwaste.jpg',
    title: '有害垃圾',
    gainian: '是指，对人体健康或者自然环境造成直接或潜在危害的废弃物。',
    baokuo: '有害垃圾主要包括：',
    baokuo_content: '废电池（充电电池、铅酸电池、镍镉电池、纽扣电池等）、废油漆、消毒剂、荧光灯管、含汞温度计、废药品及其包装物等。',
    yaoqiu: '有害垃圾投放要求',
    yaoqiu_content: '• 投放时请注意轻放\n • 易破损的请连带包装或包裹后轻放3如易挥发，请密封后投放',
  }
]

Page({
  data: {
    currentData: {},
    xuan: [{
      id: 0,
      name: '可回收物'
    }, {
      id: 1,
      name: '湿垃圾'
    }, {
      id: 2,
      name: '干垃圾'
    }, {
      id: 3,
      name: '有害垃圾',
    }],
  },
  //点击选中
  xuanzhong: function(e) {
    var id = e.currentTarget.dataset.item.id;
    this.setData({
      currentData: dataList[id]
    })
  },
  onLoad: function(options) {
    //默认选中第一个
    this.setData({
      currentData: dataList[0]
    })
  },
})