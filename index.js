
const express = require('express');
const app = express();
const port = 3000;

// 挨拶ボタンのクリックイベント
document.getElementById("greetButton").addEventListener("click", function() {
    var nameInput = document.getElementById("nameInput").value; // 入力された名前を取得
    var message = document.getElementById("message");

    // 名前が入力されていない場合
    if (nameInput.trim() === "") {
        message.innerText = "名前を入力してください。";
    } else {
        // メッセージを表示
        message.innerText = "こんにちは、" + nameInput + "さん！JavaScriptの学習を楽しんでください！";
    }

    message.style.display = "block"; // メッセージを表示
});

// リセットボタンのクリックイベント
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("nameInput").value = ""; // 入力をリセット
    document.getElementById("message").style.display = "none"; // メッセージを非表示
});
