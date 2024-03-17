module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    "react": {
      "version": "detect"
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "src/generated/**"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: ['react-refresh',"import"],
  rules: {
    "no-console": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/extensions": ["error", "ignorePackages", {
      "ts": "never",
      "tsx": "never",
    }],
    "react/prop-types":"off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        'selector': 'variable',
        'format': ['camelCase']
      },
      {
        'selector': 'variable',
        'modifiers': ['const'],
        'format': ['camelCase','PascalCase','UPPER_CASE']
      },
      {
        selector: "parameter",
        format: ["camelCase"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "method",
        format: ["camelCase"],
      },
      {
        selector: "property",
        format: ["camelCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["camelCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
    'max-lines': ['error', { max: 150 }],
    'max-lines-per-function': ['error', 50],
  },
  overrides: [
    {
      files: ['**.test.tsx', 'types/**.ts'],
      rules: {
        'max-lines': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      files: ['src/**/*.tsx'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
}
