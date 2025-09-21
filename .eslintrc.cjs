module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: [
    'dist',
    'build',
    '.eslintrc.cjs',
    'node_modules',
    '.next'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react-native'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': 'error',
    'no-var': 'error'
  },
  overrides: [
    {
      files: ['apps/gdatanomocs/**/*'],
      env: {
        'react-native/react-native': true
      },
      extends: ['@react-native-community']
    },
    {
      files: ['apps/saqqara-workflow/**/*'],
      extends: ['next/core-web-vitals']
    }
  ]
};