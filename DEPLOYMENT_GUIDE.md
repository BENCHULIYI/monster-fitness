# 怪兽训练计划 - GitHub Pages 部署教程

## 📦 部署包内容

这个文件夹包含了完整部署所需的所有文件：

```
monster-fitness/
├── index.html          # 主应用文件
├── manifest.json       # PWA配置文件
├── sw.js              # Service Worker（离线缓存）
├── icon-192.png       # 应用图标（192x192）
├── icon-512.png       # 应用图标（512x512）
└── DEPLOYMENT_GUIDE.md  # 本教程文件
```

---

## 🚀 部署步骤（预计10分钟）

### 第一步：创建GitHub账号（如果还没有）

1. 访问 https://github.com
2. 点击右上角 "Sign up"
3. 输入用户名、邮箱、密码
4. 完成邮箱验证

---

### 第二步：创建新仓库

1. 登录GitHub后，点击右上角 **"+"** 图标
2. 选择 **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `monster-fitness`（或者你喜欢的名字）
   - **Description**: `怪兽训练计划 - 居家拉力绳健身打卡App`
   - 选择 **"Public"**（必须选Public才能免费使用GitHub Pages）
   - ✅ 勾选 **"Add a README file"**
4. 点击 **"Create repository"**

---

### 第三步：上传文件到仓库

#### 方法A：网页直接上传（推荐，最简单）

1. 在刚创建的仓库页面，点击 **"Add file"** → **"Upload files"**
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. 在页面底部 **"Commit changes"** 区域：
   - 留言：`Initial commit - 怪兽训练计划App`
4. 点击 **"Commit changes"** 按钮

#### 方法B：使用GitHub Desktop（如果文件很多）

1. 下载并安装 GitHub Desktop: https://desktop.github.com
2. 登录你的GitHub账号
3. 点击 **"Clone a repository"** → 选择刚创建的 `monster-fitness` 仓库
4. 将5个文件复制到本地仓库文件夹
5. 在GitHub Desktop中提交并推送

---

### 第四步：启用GitHub Pages

1. 在仓库页面，点击顶部导航栏的 **"Settings"**
2. 在左侧菜单中找到 **"Pages"**（或者在 "Code and automation" 分类下）
3. 在 **"Build and deployment"** 区域：
   - **Source**: 选择 **"Deploy from a branch"**
   - **Branch**: 选择 **"main"** 和 **"/ (root)"**
4. 点击 **"Save"** 按钮
5. 等待约1-2分钟，页面会显示：
   ```
   Your site is live at https://你的用户名.github.io/monster-fitness/
   ```

---

### 第五步：访问你的App

1. 在浏览器中打开：
   ```
   https://你的用户名.github.io/monster-fitness/
   ```
2. 如果看到"怪兽训练计划"App首页，说明部署成功！✅

---

## 📱 添加到手机主屏幕（像原生App一样使用）

### iPhone (iOS Safari)

1. 打开Safari浏览器
2. 访问你的GitHub Pages链接
3. 点击底部中间的 **"分享"** 按钮（方块带向上箭头）
4. 向下滑动，找到并点击 **"添加到主屏幕"**
5. 修改名称为"怪兽训练"，点击 **"添加"**
6. 回到手机桌面，你会看到"怪兽训练"App图标 ✅

### Android (Chrome)

1. 打开Chrome浏览器
2. 访问你的GitHub Pages链接
3. 点击右上角 **"..."** 菜单
4. 选择 **"添加到主屏幕"** 或 **"安装应用"**
5. 确认安装
6. 回到手机桌面，你会看到"怪兽训练"App图标 ✅

---

## 🔄 如何更新App（未来如果需要修改）

1. 在GitHub仓库页面，找到要修改的文件（比如 `index.html`）
2. 点击文件名进入文件详情页
3. 点击右上角的 **"铅笔"** 图标（Edit this file）
4. 修改代码后，滚动到页面底部
5. 点击 **"Commit changes"**
6. 等待1-2分钟，GitHub Pages会自动更新
7. 手机上的App会自动获取最新版本（下次打开时）

---

## ❓ 常见问题

### Q1: 部署后访问链接显示404？

**解决方法**：
- 确认所有文件都已上传到仓库根目录（不是子文件夹）
- 确认 `index.html` 文件名拼写正确（全小写）
- 等待2-3分钟，GitHub Pages需要时间构建

### Q2: 手机添加主屏幕后，图标不是绿色的怪兽？

**解决方法**：
- 这是正常的，GitHub Pages可能无法读取自定义图标
- App功能完全正常，只是图标是默认浏览器图标
- 如需自定义图标，需要修改 `manifest.json` 的 `icons` 路径为完整URL

### Q3: 如何修改App名称？

**解决方法**：
- 编辑 `manifest.json` 文件
- 修改 `"name"` 和 `"short_name"` 字段
- 提交更改后等待更新

### Q4: 部署后数据会丢失吗？

**回答**：
- **不会！** 所有数据保存在你手机的 `localStorage` 中
- 即使删除App重装，只要不清除浏览器数据，记录都在
- **建议**：定期使用App内的"📤 导出"功能备份数据

---

## 🎯 完成检查清单

部署完成后，请确认以下功能正常：

- [ ] 能打开GitHub Pages链接
- [ ] 首页显示"怪兽训练计划"
- [ ] 能看到Day 1-9导航条
- [ ] 点击"开始训练"能进入训练页面
- [ ] 训练完成后能打卡
- [ ] 饮食页面能添加食物
- [ ] 数据页面能查看统计
- [ ] 设置页面能修改目标
- [ ] 成功添加到手机主屏幕
- [ ] 手机离线也能打开App（PWA特性）

---

## 📞 需要帮助？

如果遇到任何问题，可以：
1. 检查GitHub Pages设置是否正确
2. 查看GitHub仓库的 `Actions` 标签页，看是否有构建错误
3. 联系我获取支持

---

**🎉 恭喜！你现在拥有了一个永久免费的健身App！**

部署链接永久有效，可以随时在手机上打开使用。
