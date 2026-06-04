/* TraceGo — LINE 客服浮動按鈕 widget（精緻版：圓形 + 官方 LINE logo）
 * 用法：在頁面 </body> 前加 <script src="/line-widget.js" defer></script>
 * 改 LINE 連結只要改這裡的 LINE_URL。
 */
(function () {
  var LINE_URL = "https://line.me/R/ti/p/@163ksdcg";
  var LINE_PATH =
    "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

  var css =
    ".tg-line-float{position:fixed;bottom:26px;right:26px;z-index:99999;width:60px;height:60px;" +
    "border-radius:50%;background:#06C755;display:flex;align-items:center;justify-content:center;" +
    "box-shadow:0 6px 18px rgba(6,199,85,.45),0 2px 6px rgba(0,0,0,.12);" +
    "transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;" +
    "animation:tgLineGlow 2.6s ease-in-out infinite;-webkit-tap-highlight-color:transparent;}" +
    ".tg-line-float:hover{transform:scale(1.1);box-shadow:0 10px 26px rgba(6,199,85,.6),0 3px 8px rgba(0,0,0,.18);}" +
    ".tg-line-float:active{transform:scale(1.02);}" +
    ".tg-line-float svg{width:34px;height:34px;display:block;}" +
    ".tg-line-float::after{content:'';position:absolute;inset:0;border-radius:50%;" +
    "border:2px solid #06C755;animation:tgLineRing 2.2s ease-out infinite;pointer-events:none;}" +
    ".tg-line-float .tg-label{position:absolute;right:72px;white-space:nowrap;background:#fff;" +
    "color:#06C755;font-weight:700;font-size:14px;letter-spacing:.02em;" +
    "font-family:-apple-system,BlinkMacSystemFont,'Microsoft JhengHei','Noto Sans TC',sans-serif;" +
    "padding:8px 14px;border-radius:10px;box-shadow:0 3px 14px rgba(0,0,0,.16);" +
    "opacity:0;transform:translateX(10px) scale(.96);transition:opacity .25s,transform .25s;pointer-events:none;}" +
    ".tg-line-float .tg-label::after{content:'';position:absolute;top:50%;right:-5px;margin-top:-5px;" +
    "width:10px;height:10px;background:#fff;transform:rotate(45deg);box-shadow:2px -2px 4px rgba(0,0,0,.04);}" +
    ".tg-line-float:hover .tg-label{opacity:1;transform:translateX(0) scale(1);}" +
    "@keyframes tgLineGlow{0%,100%{box-shadow:0 6px 18px rgba(6,199,85,.45),0 2px 6px rgba(0,0,0,.12);}" +
    "50%{box-shadow:0 8px 26px rgba(6,199,85,.7),0 2px 6px rgba(0,0,0,.12);}}" +
    "@keyframes tgLineRing{0%{transform:scale(1);opacity:.6;}100%{transform:scale(1.55);opacity:0;}}" +
    "@media(max-width:480px){.tg-line-float{width:54px;height:54px;bottom:18px;right:18px;}" +
    ".tg-line-float svg{width:30px;height:30px;}.tg-line-float .tg-label{display:none;}}" +
    "@media(prefers-reduced-motion:reduce){.tg-line-float{animation:none;}.tg-line-float::after{animation:none;opacity:0;}}";

  function inject() {
    if (document.querySelector(".tg-line-float")) return;
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var a = document.createElement("a");
    a.href = LINE_URL;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "tg-line-float";
    a.setAttribute("aria-label", "LINE 客服");
    a.innerHTML =
      '<span class="tg-label">LINE 客服</span>' +
      '<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="' + LINE_PATH + '"/></svg>';
    document.body.appendChild(a);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
