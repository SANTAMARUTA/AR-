(function() {
  var videoList = {
    "": { "url": "https://www.youtube.com/watch?v=...", "position": "top" }
  };
  
  var path = window.location.pathname;
  var id = (path === "/" || path === "/index.html") ? "" : path.split('/').pop();
  var cfg = videoList[id];

  if (cfg) {
    var vid = cfg.url.split("v=")[1].split("&")[0];
    var container = document.createElement("div");
    // 完璧な配置CSS
    container.style.cssText = "width:100%; display:flex; justify-content:center; margin:20px 0;";
    container.innerHTML = '<div style="width:95%; max-width:900px; aspect-ratio:16/9; overflow:hidden; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1);"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+vid+'" frameborder="0" allowfullscreen></iframe></div>';
    
    // 表示位置制御（top または bottom）
    if (cfg.position === "bottom") document.body.appendChild(container);
    else document.querySelector(".layout-main").insertBefore(container, document.querySelector(".layout-main").firstChild);
  }
})();
