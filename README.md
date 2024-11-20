# **使用说明**

## **1. 项目简介**
### 1.1 项目名称
共享停车管理系统前端模块

### 1.2 技术栈
- Vue 3
- Element Plus
- Vite
- TypeScript等

---

## **2. 项目结构**
### 2.1 目录结构
```plaintext
# pangkinglot_frontend
├─ .husky                # 用户提交代码时格式化代码
├─ .vscode               # 本项目推荐的 vscode 配置和拓展
├─ public
│  ├─ favicon.ico
│  ├─ app-loading.css    # 首屏加载 loading
├─ src
│  ├─ api                # api 接口
│  ├─ assets             # 静态资源
│  ├─ components         # 全局组件
│  ├─ config             # 全局配置
│  ├─ constants           # 常量/枚举
│  ├─ directives         # 全局指令
│  ├─ hooks              # 全局 hook
│  ├─ icons              # svg icon
│  ├─ layouts             # 布局
│  ├─ plugins            # 全局插件
│  ├─ router             # 路由
│  ├─ store              # pinia store
│  ├─ styles             # 全局样式
│  ├─ utils              # 全局公共方法
│  └─ views              # 所有页面
│  ├─ App.vue            # 入口页面
│  └─ main.ts            # 入口文件
├─ tests                 # 单元测试
├─ types                 # ts 声明
├─ .env.development      # 开发环境
├─ .env.production       # 正式环境
├─ .env.staging          # 预发布环境
├─ .eslintrc.js          # eslint 配置
├─ .prettier.config.js   # prettier 配置
├─ tsconfig.json         # ts 编译配置
├─ unocss.config.ts      # unocss 配置
└─ vite.config.ts        # vite 配置
```

---

## **3. 部署与运行**
### 3.1 开发环境搭建
1. 配置
   ```bash
   node 版本 18.x 或 20+
   pnpm 版本 8.x 或最新版
   .vscode文件夹里的extensions.json有推荐插件，在扩展页面输入@recommended即可进行下载
   ```


2. 克隆项目代码：
   ```bash
   git clone xxx(此处为代码地址)
   ```

3. 安装依赖：
   ```bash
   在项目目录运行以下代码
   pnpm i  #安装依赖
   如果没安装pnpm，先执行：
   npm install -g pnpm
   ```

4. 启动开发服务器：
   ```bash
   pnpm dev
   ```

### 3.2 发布
1. 预览
   ```bash
   # 预览预发布环境
   pnpm preview:stage

   # 预览正式环境
   pnpm preview:prod
   ```

2. 多环境打包
   ```bash
   # 构建预发布环境
   pnpm build:stage

   # 构建正式环境
   pnpm build:prod
   ```

3. 代码检查
   ```bash
   # 代码格式化
   pnpm lint

   # 单元测试
   pnpm test
   ```

---

## **附录**

- **参考文档**：
  - Vue 3 官方文档：[https://vuejs.org/](https://vuejs.org/)
  - Element Plus 官方文档：[https://element-plus.org/](https://element-plus.org/)
  - 项目模版文档：[https://juejin.cn/post/7089377403717287972#heading-0](https://juejin.cn/post/7089377403717287972#heading-0)

