export default {
	'env': {
		'es2021': true,
		'jest/globals': true,
		"shared-node-browser": true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		"ecmaVersion": 6,
		"sourceType": "module",
	},
	"parser": "esprima",
	'rules': {
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	},
	'plugins': ['jest']
}
