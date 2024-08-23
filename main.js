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
// GSAPとScrollTriggerを登録
gsap.registerPlugin(ScrollTrigger);

// matchMediaを使用してメディアクエリに基づくアニメーションを設定
let mm = gsap.matchMedia();

mm.add("(max-width: 750px)", () => {
    // 750px以下の画面幅のときのアニメーション
    gsap.from(".text", {
        opacity: 0,
        x: -100, // 左から表示
        duration: 1,
        scrollTrigger: {
            trigger: ".text",
            start: "top 80%", // トリガーが発火するスクロール位置
            markers: true, // デバッグ用のマーカーを表示
            toggleActions: "play none none reverse",
        },
    });
});

mm.add("(min-width: 751px)", () => {
    // 751px以上の画面幅のときのアニメーション
    gsap.from(".text", {
        opacity: 0,
        y: 100, // 下から表示
        duration: 1,
        scrollTrigger: {
            trigger: ".text",
            start: "top 80%",
            markers: true,
            toggleActions: "play none none reverse",
        },
    });
});
