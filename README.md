# eslint-config


## 使用方法


```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-zls
```

如果是使用 vue-cli 创建的旧项目，请先移除掉现有的 eslint 相关依赖再重新安装:

```bash
npm remove @vue/cli-plugin-eslint eslint babel-eslint eslint-plugin-vue
npm install @vue/cli-plugin-eslint@next eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-zls
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'zls',
    'zls/vue',
  ],
  rules: {
    // 自定义规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
```

##  依赖版本：
```
eslint ^7.11.0
babel-eslint ^10.1.0
vue-eslint-parser ^7.1.1
eslint-plugin-vue ^6.2.2
 ```
