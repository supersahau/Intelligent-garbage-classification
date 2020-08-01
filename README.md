智能垃圾分类小程序

## 初始化云开发环境

在app.js里写入环境id,注意这里要用你自己的云开发环境id

```
 wx.cloud.init({
        env: "你的APPID"
 })
```

![](https://upload-images.jianshu.io/upload_images/6273713-5ec05dd09bea7825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
用时候云开发创建好以后,初始化可能需要一点时间,所以如果这里初始化有报错,记得关闭开发者工具,等几分钟再重新打开即可.

## 创建数据表(集合)

初始化成功后,就可以创建一个数据表,为后面操作云开发数据库做准备了.
![](https://upload-images.jianshu.io/upload_images/6273713-71750afbfe610381.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/6273713-626976c601f6f44f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 垃圾分类小程序的部署

### 打开开发者工具导入源码

![](https://upload-images.jianshu.io/upload_images/6273713-30e215ee5ab85494.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 开通云开发

创建好云开发后，要在app.js里进行云开发环境的初始化。
![](https://upload-images.jianshu.io/upload_images/6273713-9b1c6ad30e295d41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 创建数据表（集合）

我们要在云开发数据库里添加 sort,product,commit 这三个集合。
![](https://upload-images.jianshu.io/upload_images/6273713-d448a4657ed33926.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
权限都设置为所有人可读写
![](https://upload-images.jianshu.io/upload_images/6273713-a26a99d54bb9c324.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 百度图片识别的配置

如下图所示，我们要配置百度识图的apikey和sectetKey
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


