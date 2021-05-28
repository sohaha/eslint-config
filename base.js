/**
 * 依赖版本：
 *   eslint ^7.11.0
 *   babel-eslint ^10.1.0
 *   vue-eslint-parser ^7.1.1
 *   eslint-plugin-vue ^6.2.2
 *   @typescript-eslint/parser ^4.4.1
 *   @typescript-eslint/eslint-plugin ^4.4.1
 */
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'error',
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     */
    'block-scoped-var': 'off',
    /**
     * 变量名必须是 camelcase 风格的
     */
    camelcase: 'off',
    /**
     * 注释的首字母必须大写
     */
    'capitalized-comments': 'off',
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     */
    'class-methods-use-this': 'off',
    /**
     * 禁止函数的循环复杂度超过 20
     */
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    /**
     * 禁止函数在不同分支返回不同类型的值
     */
    'consistent-return': 'off',
    /**
     * 限制 this 的别名
     */
    'consistent-this': 'off',
    /**
     * constructor 中必须有 super
     */
    'constructor-super': 'error',
    /**
     * switch 语句必须有 default
     */
    'default-case': 'off',
    /**
     * switch 语句中的 default 必须在最后
     */
    'default-case-last': 'error',
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': 'off',
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     */
    'dot-notation': 'off',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    eqeqeq: ['error', 'always'],
    /**
     * 禁止方向错误的 for 循环
     */
    'for-direction': 'error',
    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     */
    'func-name-matching': [
      'error',
      'always',
      {
        includeCommonJSModuleExports: false,
      },
    ],
    /**
     * 函数必须有名字
     */
    'func-names': 'off',
    /**
     * 必须只使用函数声明或只使用函数表达式
     */
    'func-style': 'off',
    /**
     * getter 必须有返回值，并且禁止返回空
     */
    'getter-return': 'error',
    /**
     * setter 和 getter 必须写在一起
     */
    'grouped-accessor-pairs': 'error',
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': 'error',
    /**
     * 禁止使用指定的标识符
     */
    'id-denylist': 'off',
    /**
     * 限制变量名长度
     */
    'id-length': 'off',
    /**
     * 限制变量名必须匹配指定的正则表达式
     */
    'id-match': 'off',
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': 'off',
    /**
     * 单行注释必须写在上一行
     */
    'line-comment-position': 'off',
    /**
     * 类的成员之间是否需要空行
     */
    'lines-between-class-members': 'off',
    /**
     * 限制一个文件中类的数量
     */
    'max-classes-per-file': 'off',
    /**
     * 代码块嵌套的深度禁止超过 5 层
     */
    'max-depth': ['error', 5],
    /**
     * 限制一个文件最多的行数
     */
    'max-lines': 'off',
    /**
     * 限制函数块中的代码行数
     */
    'max-lines-per-function': 'off',
    /**
     * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
     */
    'max-nested-callbacks': ['error', 3],
    /**
     * 函数的参数禁止超过 3 个
     */
    'max-params': ['error', 3],
    /**
     * 限制函数块中的语句数量
     */
    'max-statements': 'off',
    /**
     * 限制一行中的语句数量
     */
    'max-statements-per-line': 'off',
    /**
     * 约束多行注释的格式
     */
    'multiline-comment-style': 'off',
    /**
     * new 后面的类名必须首字母大写
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    /**
     * 禁止使用 alert
     */
    'no-alert': 'off',
    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     */
    'no-array-constructor': 'error',
    /**
     * 禁止将 async 函数做为 new Promise 的回调函数
     */
    'no-async-promise-executor': 'error',
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     */
    'no-await-in-loop': 'off',
    /**
     * 禁止使用位运算
     */
    'no-bitwise': 'off',
    /**
     * 禁止使用 caller 或 callee
     */
    'no-caller': 'error',
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'error',
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': 'error',
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': 'error',
    /**
     * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': ['error', 'except-parens'],
    /**
     * 禁止使用 console
     */
    'no-console': 'off',
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'error',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    /**
     * 禁止在构造函数中返回值
     */
    'no-constructor-return': 'error',
    /**
     * 禁止使用 continue
     */
    'no-continue': 'off',
    /**
     * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
     */
    'no-control-regex': 'off',
    /**
     * 禁止使用 debugger
     */
    'no-debugger': 'error',
    /**
     * 禁止对一个变量使用 delete
     */
    'no-delete-var': 'off',
    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     */
    'no-div-regex': 'off',
    /**
     * 禁止在函数参数中出现重复名称的参数
     */
    'no-dupe-args': 'off',
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'error',
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'error',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'error',
    /**
     * 禁止在 switch 语句中出现重复测试表达式的 case
     */
    'no-duplicate-case': 'error',
    /**
     * 禁止重复导入模块
     */
    'no-duplicate-imports': 'error',
    /**
     * 禁止在 else 内使用 return，必须改为提前结束
     */
    'no-else-return': 'off',
    /**
     * 禁止出现空代码块，允许 catch 为空代码块
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    /**
     * 禁止在正则表达式中使用空的字符集 []
     */
    'no-empty-character-class': 'error',
    /**
     * 不允许有空函数
     */
    'no-empty-function': 'off',
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'error',
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     */
    'no-eq-null': 'error',
    /**
     * 禁止使用 eval
     */
    'no-eval': 'error',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'error',
    /**
     * 禁止修改原生对象
     */
    'no-extend-native': 'error',
    /**
     * 禁止出现没必要的 bind
     */
    'no-extra-bind': 'error',
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'error',
    /**
     * 禁止出现没必要的 label
     */
    'no-extra-label': 'off',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'error',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'error',
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': 'error',
    /**
     * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
     */
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!'],
      },
    ],
    /**
     * 禁止在全局作用域下定义变量或申明函数
     */
    'no-implicit-globals': 'off',
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'error',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'error',
    /**
     * 禁止在代码后添加单行注释
     */
    'no-inline-comments': 'off',
    /**
     * 禁止在 if 代码块内出现函数声明
     */
    'no-inner-declarations': ['error', 'both'],
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': 'error',
    /**
     * 禁止在类之外的地方使用 this
     */
    'no-invalid-this': 'error',
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    /**
     * 禁止使用 __iterator__
     */
    'no-iterator': 'error',
    /**
     * 禁止 label 名称与已定义的变量重复
     */
    'no-label-var': 'off',
    /**
     * 禁止使用 label
     */
    'no-labels': 'error',
    /**
     * 禁止使用没必要的 {} 作为代码块
     */
    'no-lone-blocks': 'error',
    /**
     * 禁止 else 中只有一个单独的 if
     */
    'no-lonely-if': 'off',
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     */
    'no-loop-func': 'off',
    /**
     * 禁止使用超出 js 精度范围的数字
     */
    'no-loss-of-precision': 'error',
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 'off',
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     */
    'no-misleading-character-class': 'error',
    /**
     * 禁止连续赋值，比如 foo = bar = 1
     */
    'no-multi-assign': 'off',
    /**
     * 禁止使用 \ 来换行字符串
     */
    'no-multi-str': 'error',
    /**
     * 禁止 if 里有否定的表达式
     */
    'no-negated-condition': 'off',
    /**
     * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
     */
    'no-nested-ternary': 'off',
    /**
     * 禁止直接 new 一个类而不赋值
     */
    'no-new': 'error',
    /**
     * 禁止使用 new Function
     */
    'no-new-func': 'error',
    /**
     * 禁止直接 new Object
     */
    'no-new-object': 'error',
    /**
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': 'error',
    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     */
    'no-new-wrappers': 'error',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'error',
    /**
     * 禁止使用 0 开头的数字表示八进制数
     */
    'no-octal': 'off',
    /**
     * 禁止使用八进制的转义符
     */
    'no-octal-escape': 'off',
    /**
     * 禁止对函数的参数重新赋值
     */
    'no-param-reassign': 'error',
    /**
     * 禁止使用 ++ 或 --
     */
    'no-plusplus': 'off',
    /**
     * 禁止在 Promise 的回调函数中直接 return
     */
    'no-promise-executor-return': 'error',
    /**
     * 禁止使用 __proto__
     */
    'no-proto': 'error',
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     */
    'no-prototype-builtins': 'off',
    /**
     * 禁止重复定义变量
     */
    'no-redeclare': 'off',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'error',
    /**
     * 禁止导出指定的变量名
     */
    'no-restricted-exports': 'off',
    /**
     * 禁止使用指定的全局变量
     */
    'no-restricted-globals': 'off',
    /**
     * 禁止导入指定的模块
     */
    'no-restricted-imports': 'off',
    /**
     * 禁止使用指定的对象属性
     */
    'no-restricted-properties': 'off',
    /**
     * 禁止使用指定的语法
     */
    'no-restricted-syntax': 'off',
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': ['error', 'always'],
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': 'off',
    /**
     * 禁止出现 location.href = 'javascript:void(0)';
     */
    'no-script-url': 'off',
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'error',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'error',
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': 'error',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'error',
    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     */
    'no-shadow': 'off',
    /**
     * 禁止使用保留字作为变量名
     */
    'no-shadow-restricted-names': 'error',
    /**
     * 禁止在数组中出现连续的逗号
     */
    'no-sparse-arrays': 'error',
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     */
    'no-template-curly-in-string': 'error',
    /**
     * 禁止使用三元表达式
     */
    'no-ternary': 'off',
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': 'error',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'error',
    /**
     * 禁止使用未定义的变量
     */
    'no-undef': 'error',
    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': 'error',
    /**
     * 禁止使用 undefined
     */
    'no-undefined': 'off',
    /**
     * 禁止变量名出现下划线
     */
    'no-underscore-dangle': 'off',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * 必须使用 !a 替代 a ? false : true
     */
    'no-unneeded-ternary': 'off',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'error',
    /**
     * 禁止在第一轮循环时就一定会退出循环的情况出现
     */
    'no-unreachable-loop': 'error',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     */
    'no-unsafe-finally': 'error',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': 'error',
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 禁止出现没用到的 label
     */
    'no-unused-labels': 'off',
    /**
     * 已定义的变量必须使用
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
    /**
     * 禁止正则表达式中出现无用的回溯引用
     */
    'no-useless-backreference': 'error',
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'error',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     */
    'no-useless-catch': 'error',
    /**
     * 禁止出现没必要的计算键名
     */
    'no-useless-computed-key': 'error',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'error',
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 'error',
    /**
     * 禁止出现没必要的转义
     */
    'no-useless-escape': 'off',
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */
    'no-useless-rename': 'error',
    /**
     * 禁止没必要的 return
     */
    'no-useless-return': 'off',
    /**
     * 禁止使用 var
     */
    'no-var': 'error',
    /**
     * 禁止使用 void
     */
    'no-void': 'error',
    /**
     * 禁止注释中出现 TODO 和 FIXME
     */
    'no-warning-comments': 'off',
    /**
     * 禁止使用 with
     */
    'no-with': 'off',
    /**
     * 必须使用 a = {b} 而不是 a = {b: b}
     */
    'object-shorthand': 'off',
    /**
     * 禁止变量申明时用逗号一次申明多个
     */
    'one-var': ['error', 'never'],
    /**
     * 必须使用 x = x + y 而不是 x += y
     */
    'operator-assignment': 'off',
    /**
     * 限制语句之间的空行规则，比如变量定义完之后必须要空行
     */
    'padding-line-between-statements': 'off',
    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     */
    'prefer-const': 'warn',
    /**
     * 必须使用解构赋值
     */
    'prefer-destructuring': 'off',
    /**
     * 使用 ES2016 的语法 ** 替代 Math.pow
     */
    'prefer-exponentiation-operator': 'off',
    /**
     * 使用 ES2018 中的正则表达式命名组
     */
    'prefer-named-capture-group': 'off',
    /**
     * 必须使用 0b11111011 而不是 parseInt()
     */
    'prefer-numeric-literals': 'off',
    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     */
    'prefer-object-spread': 'error',
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': 'error',
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     */
    'prefer-regex-literals': 'error',
    /**
     * 必须使用 ...args 而不是 arguments
     */
    'prefer-rest-params': 'off',
    /**
     * 必须使用 ... 而不是 apply，比如 foo(...args)
     */
    'prefer-spread': 'off',
    /**
     * 必须使用模版字符串而不是字符串连接
     */
    'prefer-template': 'off',
    /**
     * 字符串使用单引号或反引号
     */
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    /**
     * parseInt 必须传入第二个参数
     */
    radix: 'error',
    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     */
    'require-atomic-updates': 'off',
    /**
     * async 函数中必须存在 await 语句
     */
    'require-await': 'off',
    /**
     * 正则表达式中必须要加上 u 标志
     */
    'require-unicode-regexp': 'off',
    /**
     * generator 函数内必须有 yield
     */
    'require-yield': 'error',
    /**
     * 分号结尾
     */
    semi: [2, 'always'],
    /**
     * 导入必须按规则排序
     */
    'sort-imports': 'off',
    /**
     * 对象字面量的键名必须排好序
     */
    'sort-keys': 'off',
    /**
     * 变量申明必须排好序
     */
    'sort-vars': 'off',
    /**
     * 注释的斜线或 * 后必须有空格
     */
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    /**
     * 禁止使用 'strict';
     */
    strict: ['error', 'never'],
    /**
     * 创建 Symbol 时必须传入参数
     */
    'symbol-description': 'error',
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     */
    'use-isnan': 'error',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'error',
    /**
     * var 必须在作用域的最前面
     */
    'vars-on-top': 'off',
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true,
      },
    ],
  },
};
