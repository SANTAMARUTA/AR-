(function() {
  // リストデータ（GitHubから自動更新）
  var videoList = {
    "": { "url": "https://youtu.be/...", "position": "top" },
    "12345": { "url": "https://youtu.be/...", "position": "bottom" }
  };

  var id = window.location.pathname.split('/').pop() || "";
  var cfg = videoList[id];
  if (cfg) {
    var vid = cfg.url.split("v=")[1].split("&")[0];
    var div = document.createElement("div");
    div.style.cssText = "display:flex; justify-content:center; padding:20px;";
    div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen></iframe>`;
    cfg.position === "bottom" ? document.body.appendChild(div) : document.querySelector(".layout-main").prepend(div);
  }
})();
