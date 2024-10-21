FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY src ./src

RUN npm run build

CMD ["node", "dist/index.js"]  # dist/index.jsはコンパイル後のエントリーポイントを
