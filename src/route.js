app.use(express.json()); // JSONリクエストのパース
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
    res.send('<h1>ホームページ</h1><p>ここがトップページです。</p>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>このアプリについての情報です。</p>');
});

