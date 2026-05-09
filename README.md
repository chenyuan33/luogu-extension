# Luogu+ by cy3

cy3 制作的洛谷插件。

## 功能介绍

**只支持新前端页面。**

顶边栏右侧增加图标 <img src="https://chenyuan33.github.io/favicon.png" style="width: 32px">，代表插件正在运行。鼠标悬浮时显示的 UI 为**插件设置**和**全局功能**。

### 插件设置

鼠标悬浮在顶边栏右侧的图标 <img src="https://chenyuan33.github.io/favicon.png" style="width: 32px"> 上，UI 内可用：

- 暂无

### 全局功能

鼠标悬浮在顶边栏右侧的图标 <img src="https://chenyuan33.github.io/favicon.png" style="width: 32px"> 上，UI 内可用：

- 用户搜索

## 安装方式

### 前置条件

安装 [TamperMonkey](https://www.tampermonkey.net/)（Chrome / Edge / Firefox 均支持）。

### 安装脚本

#### GreasyFork

暂不支持。

#### OpenUserJS

1. 打开 [OpenUserJS 脚本页](https://openuserjs.org/scripts/chenyuan3/Luogu+_by_cy3)
2. 点击 **Install**  
3. TamperMonkey 弹出安装确认窗口，点击 **安装** 即可

#### 手动创建脚本

1. 点击 TamperMonkey 图标 -> **添加新脚本**  
2. 删除默认代码，粘贴 [`main.user.js`](main.user.js) 的完整源码  
3. 保存（Ctrl + S）

### 更新

- 脚本默认随 OpenUserJS 自动检查更新  
- 也可手动点击 TamperMonkey 图标 → **检查脚本更新**

## 贡献说明

欢迎提交 Issue 或 Pull Request 来帮助改进这个插件。

### 报告问题

发现一个问题时：

1. 关闭所有插件，尝试复现：如果复现成功，那么说明是洛谷官方的问题，应提交[洛谷工单](https://www.luogu.com.cn/ticket/new?type=.suggestion)；否则继续
2. **只**开启此插件，尝试复现：如果复现失败，那么说明是其它插件的问题，不应在此报告；否则继续
3. 前往 [GitHub Issues](https://github.com/chenyuan3/luogu-extension/issues) 描述问题，叙述清楚**问题的具体稳定复现方式**和**控制台报错截图（如有）**

### 提出新功能

在 Issues 中使用 `[Feature Request]` 标签，清晰描述期望的功能及使用场景。

### 参与代码开发

1. Fork 本仓库  
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)  
3. 提交修改 (`git commit -m 'Add some amazing feature'`)  
4. 推送到分支 (`git push origin feature/amazing-feature`)  
5. 打开 Pull Request

### 代码规范

- 使用 ES6 语法，保持代码整洁  
- 重大改动请先通过 Issue 讨论，避免重复工作

## 许可证

本项目采用 [MIT 许可证](LICENSE)。