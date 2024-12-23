app.use(express.json()); // JSONリクエストのパース
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
    res.send('<h1>ホームページ</h1><p>ここがトップページです。</p>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>このアプリについての情報です。</p>');
});



app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>お探しのページは見つかりませんでした。</p>');
});


app.listen(port, () => {
    console.log(`サーバーは http://localhost:${port} で動作中`);
});
