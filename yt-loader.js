(function() {
  // ここに設定が入っていれば、消えることはありません
  var videoList = {
    "": "（ここに以前のトップページ動画URL）",
    "商品ID1": "（ここに以前の商品ページ動画URL）"
  };

  var path = window.location.pathname;
  var currentId = (path === "/" || path === "/index.html") ? "" : path.split('/').pop();
  var videoUrl = videoList[currentId];

  if (videoUrl) {
    var vid = videoUrl.indexOf("v=")!==-1 ? videoUrl.split("v=")[1].split("&")[0] : videoUrl.split("youtu.be/")[1].split("?")[0];
    var w = document.createElement("div");
    w.style.cssText = "width:100% !important; display:flex !important; justify-content:center !important; margin:20px 0 !important; box-sizing:border-box !important;";
    w.innerHTML = '<div style="width:95% !important; max-width:900px !important; aspect-ratio:16/9 !important; overflow:hidden !important; border-radius:8px !important; box-shadow:0 4px 12px rgba(0,0,0,0.1) !important; background:#000 !important;"><iframe style="width:100% !important; height:100% !important; border:none !important;" src="https://www.youtube.com/embed/'+vid+'?rel=0" allowfullscreen></iframe></div>';
    
    var inject = function() {
      var mainArea = document.querySelector(".layout-main") || document.body;
      if (mainArea.firstChild) mainArea.insertBefore(w, mainArea.firstChild);
      else mainArea.appendChild(w);
    };
    
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
    else inject();
  }
})();
