## アプリの説明
 - wip

## 環境構築

### バージョン
```
nodejs 16.15.1
yarn 3.2.0
```
### 準備
 - JavaScript のパッケージマネージャーである yarn を準備する
 - [yarn とは](https://qiita.com/akitaaa/items/c97ff951ca31298f3f24)

## 実行
```
cd Tornade2022
yarn install
yarn dev
```

### コードのフォーマット
 - コードを整形するコマンド
 - VSCdoe の設定でファイル保存時に自動でコード整形が走るようにしているが，他のエディタだと無理かも
 - GitHub に push する前にコマンド実行してほしい
 - TODO: push 時に自動でコマンドが走るように設定する
```
yarn lint
```

### ライブラリをプロジェクトに追加するとき
```
yarn add [ライブラリ名]
yarn add -D [ライブラリ名]
```
 - `-D` オプションは開発環境のみで使用するライブラリをインストールするときに用いる
 - 開発環境のみで使用するモノの例
   - TypeScript の型情報(実際はjsにトランスパイルされるため)
