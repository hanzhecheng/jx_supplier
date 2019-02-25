# 基于nuxt2.0的 仿京东商家后台系统
> 基于最新版本的nuxt2.2.0版本 重写以前基于vue3的spa商家后台系统,配置完全参考—— [nuxt官方github](https://github.com/nuxt/nuxt.js/tree/dev/examples)

> 感想:nuxt不太适合后台系统,路由权限做起来就挺麻烦的，没有spa简单方便,博客或者内容性质的网站可以尝试,ie9以上的浏览器支持的还不错
## 更新进度

### 2018/11/9 更新
- 修改nuxt.config.js
   - 增加proxy代理
   - 增加svg-icon组件
   - 增加sass处理
   - 完成首页基础样式

### 2018/11/10 更新
- 封装axios，统一处理错误，增加请求和返回的拦截，方便后期统一处理