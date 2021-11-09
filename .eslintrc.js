module.exports = {
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base-hf'],
  'plugins': [
    'import',
    'react'
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'requireConfigFile': false,
    'babelOptions': {
      'presets': ['@babel/preset-react']
    },
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'semi': [2, 'never'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'max-len': ['warn', { 'code': 120, 'ignoreStrings': true }],
    'no-param-reassign': ['warn', { 'props': false }],
    'prefer-const': ['warn', { 'destructuring': 'all', 'ignoreReadBeforeAssign': true }],
    'prefer-template': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'brace-style': ['warn', '1tbs'],
    'curly': ['warn', 'all'],
    'class-methods-use-this': 'off',
    'react/no-unused-prop-types': [1],
    'import/first': 'warn',
    'react/jsx-key': [1],
    'react/jsx-no-duplicate-props': [1, { 'ignoreCase': true }],
    'react/jsx-closing-tag-location': [1],
    'react/jsx-closing-bracket-location': [1],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/webpack*.js'] }]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src', 'style']
      }
    }
  }
}
