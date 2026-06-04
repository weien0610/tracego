/* TraceGo — LINE 客服浮動按鈕 widget
 * 用法：在頁面 </body> 前加 <script src="/line-widget.js" defer></script>
 * 改 LINE 連結只要改這裡的 LINE_URL。
 */
(function () {
  var LINE_URL = "https://line.me/R/ti/p/@163ksdcg";

  var css =
    ".tg-line-float{position:fixed;bottom:24px;right:24px;z-index:99999;" +
    "display:flex;align-items:center;gap:8px;background:#06C755;color:#fff;" +
    "padding:13px 20px;border-radius:50px;text-decoration:none;font-weight:700;" +
    "font-size:15px;font-family:-apple-system,'Microsoft JhengHei','Noto Sans TC',sans-serif;" +
    "box-shadow:0 6px 20px rgba(6,199,85,.45);animation:tgLineBob 2.2s ease-in-out infinite;" +
    "transition:transform .2s;-webkit-tap-highlight-color:transparent;}" +
    ".tg-line-float:hover{transform:scale(1.06);}" +
    ".tg-line-float .tg-ic{font-size:20px;line-height:1;}" +
    ".tg-line-float::after{content:'';position:absolute;inset:-3px;border-radius:50px;" +
    "border:2px solid #06C755;opacity:.55;z-index:-1;animation:tgLineRing 1.8s ease-out infinite;}" +
    "@keyframes tgLineBob{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}" +
    "@keyframes tgLineRing{0%{transform:scale(1);opacity:.55;}100%{transform:scale(1.35);opacity:0;}}" +
    "@media(max-width:480px){.tg-line-float{padding:12px 16px;font-size:14px;bottom:16px;right:16px;}" +
    ".tg-line-float .tg-ic{font-size:18px;}}" +
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
    a.innerHTML = '<span class="tg-ic">💬</span><span>LINE 客服</span>';
    document.body.appendChild(a);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
