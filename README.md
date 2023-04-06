# 个人简历

该项目使用技术栈为 vue3 全家桶 + webpack ，使用了 element ui 组件库，其中加入了响应式布局功能，能在 PC 端、移动端、平板端完美兼容显示，如果觉得不错请给一个 star 哦。(￣ ▽ ￣)／

原项目地址 ☞ [<原项目地址>](https://github.com/Li-MLong/oldResume)

## 模板效果

点击查看效果 ☞ [<个人简历主页>](https://li-mlong.github.io)

## 使用须知

当前项目主分支为 vue 源代码文件，docs 为打包上线后文件，如下载请注意区分。

## 使用说明

本地搭建使用说明如下:

1. 安装 git,拉取项目 `git clone 'https://github.com/Li-MLong/Li-MLong.github.io.git'`;

2. 进入项目源文件 `cd Li-MLong.github.io`;

3. 执行命令 `npm install`;

4. 等待依赖安装完成,执行命令 `npm run dev`;

5. 打开浏览器输入地址 `http://localhost:8080` [<地址>](http://localhost:8080)

## 简单修改使用说明

- 打开拉取文件，进入 `src/store/index.ts` 文件
- 修改 state 中的数据：

```js
state: {
  avatar: "", // 头像链接
  name: "", // 名字
  message: [], // 个人信息
  mobileNo: "", // 手机号
  wechatNo: "", // 微信号
  mailbox: "", // 邮箱
  sex: "", // 性别
  birthday: "", // 生日
  skills: [], //个人技能
  schoolBadge: "", // 校徽链接
  school: {}, // 学校情况
  works: [], // 工作经历
  productions: [], // 个人作品(只支持三个)
},
```
