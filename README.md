# HIROMU OFFICE — HP

静的HTML/CSS/JSのみで構成されたサイトです。ビルド不要でVercelにそのままデプロイできます。

## 設定済みのこと

- お問い合わせフォームは [web3forms.com](https://web3forms.com) のアクセスキーを設定済み（[contact.html](contact.html)）
- 送信先は登録時のメールアドレス。Web3Formsのダッシュボード（app.web3forms.com）でいつでも変更可能
- 月250件まで無料

## 公開前にやること

### Vercelへデプロイ

**GitHubから連携する場合**
1. このフォルダの中身をGitHubリポジトリにpush
2. [vercel.com](https://vercel.com) でリポジトリをImport（Framework Preset: Other / ビルドコマンド不要）
3. Deploy

**CLIから直接デプロイする場合**
```bash
npm i -g vercel
cd hiromu-office-hp
vercel --prod
```

## 構成

```
index.html      TOPページ
about.html      事業案内・プロフィール
clients.html    取引先
contact.html    お問い合わせフォーム
css/style.css   共通スタイル
js/main.js      ヘッダー・モバイルメニュー制御
js/contact.js   フォーム送信処理（Web3Forms）
assets/logo.png ロゴ
vercel.json     クリーンURL設定（/about.html → /about）
```
