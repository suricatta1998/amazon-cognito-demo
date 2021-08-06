# Amazon Cognito Demo

## 介绍

本项目实现了基于 **Amazon Cognito** 服务的用户登录注册功能的纯前端项目。

### 项目依赖

- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [AWS Amplify](https://docs.amplify.aws/)

### 功能

- 用户登录
- 用户注册
- 用户登出

## 使用方法

1. 获取项目代码

   ```bash
   git clone https://github.com/suricatta1998/amazon-cognito-demo.git
   ```

2. 安装依赖

   ```bash
   npm install
   # 或者
   yarn install
   ```

3. 设定 Amazon Cognito 参数

   ```js
   // main.js
   const USER_POOL_ID = "XX-XXXX-X_abcd1234";
   const APP_CLIENT_ID = "a1b2c3d4e5f6g7h8i9j0k1l2m3";
   const IDENTITY_POOL_ID = "XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab";
   const REGION = "XX-XXXX-X";
   ```

4. 本地运行

   ```bash
   npm run dev
   # 或者
   yarn dev
   ```

5. 预览项目

   ```bash
   npm run serve
   # 或者
   yarn serve
   ```

6. 编译构建

   ```bash
   npm run build
   # 或者
   yarn build
   ```
