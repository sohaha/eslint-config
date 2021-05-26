# eslint-config


## 使用方法


```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-zls
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