module.exports = {
	env: {
		jest: true,
		browser: true,
		node: true,
		es6: true,
	}, // 指定运行的环境
	parser: '@typescript-eslint/parser', // 解析器
	extends: [
		'plugin:react/recommended', // 从@eslint-plugin-react中选择推荐的规则
		'plugin:@typescript-eslint/recommended', // 从@typescript-eslint/eslint-plugin选择推荐的规则
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'prettier', // 兼容prettier
	],
	parserOptions: {
		ecmaVersion: 2018, // 帮助转化最先进的ECMAScript功能
		sourceType: 'module', // 允许imports的用法
		ecmaFeatures: {
			jsx: true, // JSX兼容
		},
	}, // 解析器相关设置
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
	},
	settings: {
		react: {
			version: 'detect', // 告诉eslint-plugin-react自动检测最新版本的react
		},
	},
};
