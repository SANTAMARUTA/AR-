(function() {
  // 管理画面から自動更新されるデータリスト
  var videoList = {
    "": { "url": "", "position": "top" } // トップページ用サンプル
  };

  var path = window.location.pathname;
  var currentId = (path === "/" || path === "/index.html") ? "" : path.split('/').pop();
  var config = videoList[currentId];

  if (config && config.url) {
    var vid = config.url.indexOf("v=")!==-1 ? config.url.split("v=")[1].split("&")[0] : config.url.split("youtu.be/")[1].split("?")[0];
    
    var w = document.createElement("div");
    w.style.cssText = "width:100% !important; display:flex !important; justify-content:center !important; margin:20px 0 !important; box-sizing:border-box !important;";
    w.innerHTML = '<div style="width:95% !important; max-width:900px !important; aspect-ratio:16/9 !important; overflow:hidden !important; border-radius:8px !important; box-shadow:0 4px 12px rgba(0,0,0,0.1) !important; background:#000 !important;"><iframe style="width:100% !important; height:100% !important; border:none !important;" src="https://www.youtube.com/embed/'+vid+'?rel=0" allowfullscreen></iframe></div>';
    
    var inject = function() {
      var m = (config.position === "bottom") ? document.body : (document.querySelector(".layout-main") || document.body);
      if (config.position === "bottom") m.appendChild(w);
      else if (m.firstChild) m.insertBefore(w, m.firstChild);
      else m.appendChild(w);
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
    else inject();
  }
})();
