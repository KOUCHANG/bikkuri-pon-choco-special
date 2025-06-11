// ページが読み込まれたら実行
window.onload = function() {
    const randomImage = document.getElementById('random-image');

    // 🖼️ ここに `images` フォルダに入れた画像ファイル名を追加してください
    const images = [
        'images/image1.png',
        'images/image2.png',
        'images/image3.png',
        'images/image4.png',
        'images/image5.png',
        'images/image6.png',
    ];

    // ✨ パッケージ画像のパスを指定 (例: imagesフォルダに package.png を配置)
    const packageImage = 'images/package.png';
    // ✨ パッケージ画像の表示時間 (ミリ秒単位、例: 2000 = 2秒)
    // const packageDisplayDuration = 2000; // クリックで開始するため不要に

    // --- 設定項目 ---
    const shuffleDuration = 3000; // シャッフルアニメーションの時間 (3秒)
    const shuffleInterval = 100;  // 画像が切り替わる速さ (0.1秒)
    // ----------------

    // ===== 初期表示: パッケージ画像 =====
    randomImage.src = packageImage;

    // ===== 画像クリック/タップでシャッフル処理を開始 =====
    randomImage.addEventListener('click', startShuffleOnClick, { once: true }); // 一度だけ実行されるようにする

    function startShuffleOnClick() {
        // 画像が1枚以下の場合は、シャッフル処理をせずにエラーを回避する
        if (images.length <= 1) {
            if (images.length === 1) {
                // 画像が1枚だけなら、それを表示して処理を終了
                randomImage.src = images[0];
            }
            // 画像が0枚の場合は何も表示されない (パッケージ画像が表示されたままになる)
            return; // これ以降のシャッフル処理に進まないようにする
        }
        // ===================

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
                } while (randomIndex === lastIndex && images.length > 1);

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
    }
};