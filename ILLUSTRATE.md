## 创建一个 Vue 应用
前提条件： 已安装 16.0 或更高版本的 Node.js
```
// Vite 来创建一个 Vue 项目
npm create vue@latest  /  pnpm create vue@latest
```

- 推荐插件：
vscode的插件
`Vue Language Features (Volar)`
https://marketplace.visualstudio.com/items?itemName=Vue.volar

浏览器插件
https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

- 测试
`Cypress` 推荐用于 E2E 测试， 
    https://docs.cypress.io/guides/overview/why-cypress

`Vites`t 是一个追求更快运行速度的测试运行器
    https://vitest.dev/


- 代码规范
`Vue CLI` 的用户可能习惯于通过 `webpack loader` 来配置规范检查器。然而，若基于 `Vite` 构建， 则选择： `eslint-plugin-vue`
`npm install -D eslint eslint-plugin-vue`，然后遵照 `eslint-plugin-vue` 的指引进行配置。
vscode 相关插件： https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

git commit 的时候提交规范
https://github.com/lint-staged/lint-staged

前端工具栏vite： https://cn.vitejs.dev/


## 生产部署（使用构建工具）
Vite 生产环境指南： https://cn.vitejs.dev/guide/build
Vite 部署指南： https://cn.vitejs.dev/guide/static-deploy

追踪运行时错误：
诸如 Sentry【https://docs.sentry.io/platforms/javascript/guides/vue/】 和 Bugsnag【https://docs.bugsnag.com/platforms/javascript/vue/】 等服务也为 Vue 提供了官方集成



## 项目中配置 pnpm
```sh
npm install -g pnpm
```

## 添加router
```sh
pnpm install vue-router@4
```
