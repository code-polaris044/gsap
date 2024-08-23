gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 400,
    scrollTrigger: {
        trigger: ".container",
        start: "top center",
        markers: true,
    },
});

// .textクラスの要素にアニメーションを適用
gsap.from(".text", {
    opacity: 0, // 初期の不透明度を0に設定
    y: 100, // 初期位置を100px下に設定
    duration: 1, // アニメーションの持続時間を1秒に設定
    scrollTrigger: {
        trigger: ".text", // アニメーションをトリガーする要素
        start: "top bottom", // トリガーが発火するスクロール位置
        markers: true, // デバッグ用のマーカーを表示
        toggleActions: "play none none reverse", // スクロールに応じたアクション
    },
});
