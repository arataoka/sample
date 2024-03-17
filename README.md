## 申請フォーム実装
### 使用技術
- React
- TypeScript
- Vite
- ESLint
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) / [Babel](https://babeljs.io/)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) / [SWC](https://swc.rs/)
- Chakra UI (UI library)
- React-Hook-Form (form library)
- zod (form validation plugin)
- aspida (code generator for API)
- stoplight/prism-cli (mock server)

### セットアップ
1. package インストール
```bash
yarn install
```

2. husky 設定
```bash
 yarn prepare
```

3. 開発サーバー起動
```bash
 yarn run dev
```

4. API疎通コード自動生成
```bash
yarn api:build
```

5. mockAPIサーバー起動
```bash
yarn api:mock
```

### ディレクトリ構成
```bash
expense-form/
├── .husky # huskyの設定ファイル
├── public
└── src
    ├── api
    │   ├── scheme 
    │   │  └── api-docs.yaml # API interface specification
    │   └── utils # API関連のヘルパー関数
    ├── components # 全体で使用できる共通コンポーネント
    │   └── Button 
    ├── generated # 自動生成されたAPIのコード
    ├── hooks # 全体で使用できる共通hooks
    │   ├── api
    │   └── toast
    ├── layouts # 画面レイアウトテンプレート
    ├── utils #全体で使用するヘルパー関数
    ├── pages
    │   └── ExpenseForm  # 申請フォーム画面で使用するモジュール格納ディレクトリ
    │       ├── components
    │       │   ├── ExpenseDetails
    │       │   └── ExpenseHeader
    │       ├── constants
    │       ├── hooks
    │       ├── scheme
    │       └── utils
    ├── App.tsx # root component
    ├── main.tsx # entry point
├── .eslintrc.cjs
├── .gitignore
├── prettier.config.js
└── ... その他configファイル

```
