# NestJS 

官网： https://nestjs.bootcss.com/



## nestJS 介绍

### what(是什么)

官方解释： Nest (NestJS) 是一个用于构建高效、可扩展的 [Node.js](https://nodejs.org/) 服务器端应用程序的开发框架。它利用 JavaScript 的渐进增强的能力，使用并完全支持 [TypeScript](http://www.typescriptlang.org/) （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP （面向对象编程）、FP （函数式编程）和 FRP （函数响应式编程）

从定义中，我们找出几个关键字来看看：

- 基于 Node：对前端友好
- 服务端应用框架：主要用于服务端接口开发
- 高效，可扩展：体现在 Nest 各个功能模块之间的架构是解耦的、容易进行组合的
- 渐进式：不需要一开始掌握它的全部功能特性，后续可根据业务需要逐步增加功能。
- Nest 由 TS 开发，完全支持 TS

### when （什么场景用）

第二个问题：有哪些应用场景和能力？能解决什么问题？

1. 首先是最基础的，做服务端开发；
2. 其次，对服务端功能的扩展，比如：安全、鉴权、队列、日志等
3. 技术架构级支持：微服务，序列化等等

### why (为什么用他)

![image-20240105153709264](D:\cg\Sun\src\docs\images\image-20240105153709264.png)

![image-20240105153823815](D:\cg\Sun\src\docs\images\image-20240105153823815.png)

### HOW （怎么使用）

全局安装脚手架， 并创建项目

```js
// 全局安装脚手架
npm i -g @nestjs/cli

// 创建项目
nest new project-name

// watch mode 
npm run start:dev
```

- Nest 官方提供了脚手架，可通过 npm 全局安装，使用方法与 Vue client 大同小异，开发体验是比较不错的
- 使用 [Nest CLI](https://link.juejin.cn?target=https%3A%2F%2Fdocs.nestjs.cn%2F7%2Fcli%3Fid%3Doverview) 建立新项目非常简单，通过 `nest new xxx` 一键创建，会生成样板代码、安装依赖
- 使用命令 `npm start:dev`   启动应用程序，监听入站 HTTP 请求。