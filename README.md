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
源码的导入我在小程序基础课里有讲的。

### 开通云开发

云开发的开通，在我云开发基础入门里也有讲，这里就不在累述。
创建好云开发后，要在app.js里进行云开发环境的初始化。
![](https://upload-images.jianshu.io/upload_images/6273713-9b1c6ad30e295d41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 创建数据表（集合）

我们要在云开发数据库里添加 sort,product,commit 这三个集合。
![](https://upload-images.jianshu.io/upload_images/6273713-d448a4657ed33926.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
权限都设置为所有人可读写
![](https://upload-images.jianshu.io/upload_images/6273713-a26a99d54bb9c324.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 导入数据到数据库

![](https://upload-images.jianshu.io/upload_images/6273713-a1d8d0079c42d7fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
把上图所示的两组数据导入到数据库
如导入sort.json里的数据到sort集合
![](https://upload-images.jianshu.io/upload_images/6273713-27196c8901a41206.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/6273713-1616eb380d0e996b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
product.csv的导入和这个一样的操作。只不过是导入数据到product表。

### 部署云函数

先选择云开发环境
![](https://upload-images.jianshu.io/upload_images/6273713-600469f99ec9df50.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/6273713-54b190683bbe47df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如下图所示，部署云函数。
![](https://upload-images.jianshu.io/upload_images/6273713-83baf9c115d43ca2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
下面6个云函数都要部署，部署成功后文件前面会出现一个云朵的标识。
![](https://upload-images.jianshu.io/upload_images/6273713-eedd7b646782ac56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

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
这里我等下也会视频讲解，如果有买我课，或者办我的年卡，都可以获取讲解视频。
把获取到的apikey和sectetKey替换到下面
![](https://upload-images.jianshu.io/upload_images/6273713-8487dbae5846e923.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
替换好以后不要忘记再次部署下baiduAccessToken云函数
![](https://upload-images.jianshu.io/upload_images/6273713-6c63e987aa36b63f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 使用百度识图

这个时候直接使用，通常会报下面的错误。
![](https://upload-images.jianshu.io/upload_images/6273713-141796371c5120f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这个错误是因为我们没有配置安全域名所致。
![](https://upload-images.jianshu.io/upload_images/6273713-b4313ed54a023861.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这个时候你需要去你的小程序里配置上图所示的服务器域名。这样我们再次使用时，就可以成功的使用垃圾图片识别功能了。
![](https://upload-images.jianshu.io/upload_images/6273713-39e7cfce12ba0c6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这样我们就可以愉快的使用垃圾分类小程序了。

