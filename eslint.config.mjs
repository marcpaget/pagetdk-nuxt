// @ts-check
// import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin'


export default withNuxt(
	
	stylistic.configs['recommended-flat'],
	{
	"rules": {
		"@typescript-eslint/no-unused-vars": [
		  "error",
		  {
			"args": "all",
			"argsIgnorePattern": "^_",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": "^_",
			"destructuredArrayIgnorePattern": "^_",
			"varsIgnorePattern": "^_",
			"ignoreRestSiblings": true
		  }
		]
	  }
	},
	// rules: {
	// 	// Note: you must disable the base rule as it can report incorrect errors
	// 	no-unused-vars: "off",
	// 	"@typescript-eslint/no-unused-vars": "error"
	//   },
	//   // the following options are the default values
	//   indent: 2,
	//   quotes: 'single',
	//   semi: false,
	//   jsx: true,
	//   // array-element-newline: 'consistent',
	//   // ...
	// }),
);
// eslint.config.js
