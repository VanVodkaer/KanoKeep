# KanoKeep

<div align="center">
  <img src="Logo.png" alt="KanoKeep Logo" width="100"/>
  <br>
  <span>简体中文 | <a href="README-en_US.md">English</a></span>
  <br>
  小鹿记账本❤️
</div>

## 项目简介

KanoKeep 是我作为软件开发初学者的一个练习项目。这是一个简单的记账软件，通过结合 Vue 和 Electron 技术，我探索了前端和桌面应用开发的基本概念。

## 技术栈

- **Vue**: 用于前端界面的构建。
- **Electron**: 用于将 Web 应用转化为桌面应用。

## 开发与构建指南

### 单独构建 Web 应用

若需单独构建 Web 应用，请按以下步骤操作：

1. 进入 Web 目录：
   ```bash
   cd ./web
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 构建项目：
   ```bash
   npm run build
   ```

构建完成后的文件将位于 `./electron/dist` 目录中。

### 构建 Electron 应用

在构建 Electron 应用前，请先构建 Web 应用，然后继续以下步骤：

1. 进入 Electron 目录：
   ```bash
   cd ./electron
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 构建应用：
   ```bash
   npm run make
   ```

构建后的应用文件会存放在 `./electron/out` 目录中。

### 同时构建 Web 和 Electron

如果想一次性构建 Web 和 Electron，请在项目根目录下运行以下命令：

```bash
npm run init
npm run build
```
