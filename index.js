
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSONリクエストのパース
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('<h1>ホームページ</h1><p>ここがトップページです。</p>');
});
