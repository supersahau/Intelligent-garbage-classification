智能垃圾分类小程序

### 初始化云开发环境

在app.js里写入环境id,注意这里要用你自己的云开发环境id

```
 wx.cloud.init({
        env: "你的云开发环境ID"
 })
```

### 创建数据表(集合)

我们要在云开发数据库里添加 sort,product,commit 这三个集合。
权限都设置为所有人可读写

## 如有问题咨询，请联系Email：supersahau@vip.qq.com

### Copyright©supersahau
