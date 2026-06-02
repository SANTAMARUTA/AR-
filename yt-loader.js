(function() {
  // ここに動画リストを管理します。商品IDとYouTube URLのセットです
  var videoList = {
    // 例: "商品ID": "https://www.youtube.com/watch?v=動画ID"
    // 下記のように追記していってください
  };

  var currentId = window.location.pathname.split('/').pop();
  var videoUrl = videoList[currentId];

  if (videoUrl) {
    var vid = videoUrl.indexOf("v=")!==-1 ? videoUrl.split("v=")[1].split("&")[0] : videoUrl.split("youtu.be/")[1].split("?")[0];
    var w = document.createElement("div");
    w.style.cssText = "width:100% !important; display:flex !important; justify-content:center !important; margin:20px 0 !important;";
    w.innerHTML = '<div style="width:95% !important; max-width:900px !important; aspect-ratio:16/9 !important; overflow:hidden !important; border-radius:8px !important; box-shadow:0 4px 12px rgba(0,0,0,0.1) !important;"><iframe style="width:100% !important; height:100% !important; border:none !important;" src="https://www.youtube.com/embed/'+vid+'" allowfullscreen></iframe></div>';
    
    // BASEのメインコンテンツエリアをターゲットに挿入
    var main = document.querySelector(".layout-main") || document.body;
    main.insertBefore(w, main.firstChild);
  }
})();
