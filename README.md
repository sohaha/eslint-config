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

## 忽略规则

### 文件忽略

根目录下创建一个 `.eslintignore` 文件，并将需要忽略的文件路径填进去,如：

```
/test/
/dist/
/*.test.js
```

##  依赖版本：
```
eslint ^7.11.0
babel-eslint ^10.1.0
vue-eslint-parser ^7.1.1
eslint-plugin-vue ^6.2.2
 ```



## VsCode 配置

需要安装的扩展：

ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Prettier-eslint https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint

Vetur https://marketplace.visualstudio.com/items?itemName=octref.vetur

打开 VsCode 的配置文件 `settings.json` 填入以下配置：

```json
{
    "[vue]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "editor.formatOnSave": true,
}
```