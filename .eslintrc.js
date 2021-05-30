module.exports = {
  root: true,
  extends: ['react-app', 'plugin:@typescript-eslint/recommended', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'unicorn',
    'jest',
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    /* General options */
    'eol-last': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignorePattern: '^import.*$',
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'semi-style': ['error', 'last'],
    'semi-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'block-spacing': ['error', 'always'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'comma-style': [
      'error', 'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'new-parens': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 1,
        maxEOF: 0,
      },
    ],
    'no-nested-ternary': 'error',

    /** Typescript extension */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /* Import options */
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],

    /* Unicorn options */
    // 'unicorn/filename-case': [
    // 	'error',
    // 	{
    // 		case: 'kebabCase',
    // 	},
    // ],

    /* React options */
    'react-hooks/exhaustive-deps': 'warn',
  },
  // rules: {
  // 	'import/order': 'off',
  // },
}
