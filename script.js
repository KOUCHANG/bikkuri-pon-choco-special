// ページが読み込まれたら実行
window.onload = function() {
    const randomImage = document.getElementById('random-image');

    // 🖼️ ここに `images` フォルダに入れた画像ファイル名を追加してください
    const images = [
        'images/image1.jpg',
        'images/image2.png',
        'images/image3.gif',
        // 例: 'images/my_cat.jpg',
        // 例: 'images/favorite_food.png',
    ];

    // --- 設定項目 ---
    const shuffleDuration = 3000; // シャッフルアニメーションの時間 (3秒)
    const shuffleInterval = 100;  // 画像が切り替わる速さ (0.1秒)
    // ----------------

    let shuffleTimer;

    // シャッフルアニメーションを開始する関数
    function startShuffle() {
        let lastIndex = -1;
        // 設定した間隔で画像をランダムに切り替える
        shuffleTimer = setInterval(() => {
            let randomIndex;
            // 前回と同じ画像が連続で表示されないようにする
            do {
                randomIndex = Math.floor(Math.random() * images.length);
            } while (randomIndex === lastIndex);
            
            randomImage.src = images[randomIndex];
            lastIndex = randomIndex;
        }, shuffleInterval);
    }

    // シャッフルを停止して最終的な画像を表示する関数
    function stopShuffle() {
        clearInterval(shuffleTimer); // アニメーションを停止
        
        // 最終的に表示する画像をランダムに決定
        const finalImageIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[finalImageIndex];
    }

    // 実行！
    startShuffle(); // まずシャッフルを開始
    setTimeout(stopShuffle, shuffleDuration); // 設定した時間が経過したらシャッフルを停止
};
