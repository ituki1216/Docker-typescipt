# ベースイメージの指定
FROM node:20

# 作業ディレクトリの作成
WORKDIR /app

# TypeScriptとts-nodeをインストール
RUN npm install -g typescript ts-node

# プロジェクトの依存関係を管理するためのパッケージ.jsonをコピー
COPY package.json .

# 依存関係のインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

RUN npm install -g ts-node


# TypeScriptのコンパイルを行うためのコマンド
CMD ["ts-node", "index.ts"]
