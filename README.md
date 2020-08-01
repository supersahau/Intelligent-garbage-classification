智能垃圾分类小程序

## 初始化云开发环境

在app.js里写入环境id,注意这里要用你自己的云开发环境id

```
 wx.cloud.init({
        env: "你的APPID"
 })
```

## 创建数据表(集合)

我们要在云开发数据库里添加 sort,product,commit 这三个集合。
权限都设置为所有人可读写

## 百度图片识别的配置

需要要配置百度识图的apikey和sectetKey
![](https://upload-images.jianshu.io/upload_images/6273713-05a418d080090819.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
下面我们讲下如何去获取百度识图的apikey和sectetKey
我们需要进入百度识图的官网，去注册账号
[http://ai.baidu.com/ai-doc/IMAGERECOGNITION/8k3e7f69o](http://ai.baidu.com/ai-doc/IMAGERECOGNITION/8k3e7f69o)
![](https://upload-images.jianshu.io/upload_images/6273713-8d16db2b7839afda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注册好以后去创建一个应用
![](https://upload-images.jianshu.io/upload_images/6273713-872d0205e31fe358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/6273713-0326fc97a4ed7896.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
把获取到的apikey和sectetKey替换到下面
![](https://upload-images.jianshu.io/upload_images/6273713-8487dbae5846e923.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
替换好以后不要忘记再次部署下baiduAccessToken云函数
![](https://upload-images.jianshu.io/upload_images/6273713-6c63e987aa36b63f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


