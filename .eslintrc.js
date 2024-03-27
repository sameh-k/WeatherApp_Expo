module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'comma-dangle': [2, 'never'],
    // 'react/jsx-filename-extenstion': [
    //   1,
    //   {
    //     extensions: ['.js', 'jsx']
    //   }
    // ],
    'import/extensions': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false
      }
    ]
  }
}
