<div align="center">
    <a href="https://github.com/flingyp/vadmire-admin">
        <img alt="VAdmin Logo" width="140" src="./public/logo.svg">
    </a>
</div>

<div align="center">
    <h1>VAdmire Admin</h1>
    <div align="center">
        <img src="https://img.shields.io/github/license/flingyp/vadmire-admin" alt="License" />
    </div>
</div>


## Introduction

**VAmire Admin** 是一款通用性后台管理系统模板。基于一套相对较新技术栈 `Vite +  Vue3 + TailwindCSS + TypeScript`。 能够帮助开发者们快速开启业务开发，并且系统内部集成了许多业务开发用到的常用功能。同时也是学习Vue3相关生态的参考项目之一。

## Features

- 💪 **最新技术栈**: Vite + Vue + TailwindCSS + TypeScript
- 🌛 **暗黑模式**: 内置暗黑模式
- 🌿 **系统主题**: 动态配置系统主题色
- 🏄‍♂️ **权限控制**: 支持前后端两种方式权限控制解决方案
- ♻️ **功能组件**: 内置多个功能组件与可组合式函数
- 🚀 **开发体验**: 极致开发体验

## To try it

- Git the repository

```sh
git clone https://github.com/flingyp/vadmire-admin.git
```

- Installation dependencies

```sh
cd vadmire-admin

pnpm install
```

- Run

```sh
pnpm run dev
```

- Build

```sh
pnpm run build 

pnpm run build:mock # mock mode
```

## Directory description

```sh
├─.github
├─.husky
├─.vscode
├─mock
├─public
├─src
   ├─assets
   │  ├─img
   │  └─svg
   ├─components
   ├─composables
   ├─directives
   ├─layout
   ├─modules
   ├─requests
   ├─router  
   ├─store
   ├─styles
   ├─utils
   └─views
├─.editorconfig
├─.env.development
├─.env.production
├─.eslintrc
├─index.html
├─tailwind.config.js
└─vite.config.ts
```
