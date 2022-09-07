module.exports = {
    printWidth: 100, // 超过最大值换行
    tabWidth: 2, // tab缩进大小,默认为2
    useTabs: true, // 使用tab缩进，默认false
    semi: false, // 结尾使用分号, 默认true
    singleQuote: false, // 使用单引号, 默认false
    TrailingCooma: 'none', // 行尾逗号,默认none,可选 none|es5|all es5 包括es5中的数组、对象，all 包括函数对象等所有可选
    bracketSpacing: true, // 对象中的空格 默认true，true: { foo: bar }，false: {foo: bar}
    jsxBracketSameLine: false,
    arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always， avoid 能省略括号的时候就省略 例如x => x，always 总是有括号
}
