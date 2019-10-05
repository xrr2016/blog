# Cold Stone :tada:

簡潔、シンプル、文字を主体とした [Hexo](https://hexo.io/zh-cn) ブログのテーマ

## プレビュー

![demo](images/demo.gif)

[サンプルサイト](https://coldstone.fun)

## 特徴

- 自動的にダークモードへの切り替え
- PWA（rogressive Web Apps）
- [Utteranc](https://utteranc.es/) コメント対応
- モバイルデバイスフレンドリー
- English/中文/日本語

## クイックスタート

まずは [Hexo](https://hexo.io) をインストールしてプロジェクトを作成します。既にインストール済みならこのトピックをスキップしてください。

```sh
npm install -g hexo-cli

hexo init <folder>

cd <folder>

npm install
```

### テーマのインストール

```sh
git clone https://github.com/dongsu-iis/hexo-theme-cold-stone.git themes/cold-stone --depth 1
```

### 使い方

1. Hexo プロジェクトフォルダ配下の `_config.yml` ファイルを修正し、theme は変更する

```yml
theme: cold-stone
```

2.  `themes/cold-stone` フォルダ配下の `icons` フォルダを `source` フォルダの中へ移動する

3. プロジェクトの親フォルダにて下記のコマンドを実行し、新しいページを作成する

```sh
hexo new page projects

hexo new page categories

hexo new page tags

hexo new page about
```

 `source/projects/index.md` ファイルに以下のコードを追加します

```md
---
layout: projects
---
```

`source/categories/index.md` ファイルに以下のコードを追加します

```md
---
layout: categories
---
```

`source/tags/index.md` ファイルに以下のコードを追加します

```md
---
layout: tags
---
```

4. 以下のようにHexo ブログの設定情報を修正する `_congfig.yml`

```yml
# ブログ情報
seo_title: 冷石的博客
project_dir: projects

# ユーザーアイコン
avatar: avatar.png

# Utteranc コメント欄
comment:
  repo: xrr2016/blog

# SNS
sns:
  github: xrr2016
  juejin: 576666b7207703006b1e0f09
  twitter: xrr2016

# 訪問数の取得（GoogleTagManagerのIdが必要）
track:
  gaid: xxxxxxxxxxxxxx
```

5. `source` フォルダ配下に `avatar.png` 画像を追加

6. hexo-wordcount (文字数カウント)をインストール

```sh
npm i --save hexo-wordcount
```

### ローカル環境にて実行

```sh
hexo server
```

### デプロイ

hexo-deployer-git をインストール

```sh
 npm install hexo-deployer-git --save
```

設定情報を修正

```yml
deploy:
  type: git
  repo: https://github.com/your-username/your-repo
  branch: gh-pages
```

デプロイcommand

```sh
hexo clean && hexo deploy
```

他のデプロイ方法参考サイト：https://hexo.io/docs/deployment

## 導入実績

[冷石的博客](https://coldstone.fun) 💯

![audits](images/audits.gif)

## TODOS

- [x] 検索機能

- [x] ページング機能

- [ ] ページの訪問数の表示

- [x] フレンドリーリンクのページ

## 変更履歴

v2019-09-30

- ナビゲーションバーのレイアウトを修正
- メインページのロード動画時間を増やした
- ブラウザー設定に沿ってダークモードに切り替えできるように修正

v2019-09-25

- メインページのロード動画を追加
- テーマの幅を少し縮小

v2019-09-23

- PC側のトップページレイアウト修正
- 文字数計算機能 (hexo-wordcountのインストールが必要)
- PC 側では Google 検索機能を追加
- フレンドリーリンクページの新規作成

## ライセンス

[MIT](LICENSE)

もしこのテーマが良いと思ったら、このリポジトリーにstarをください😎