function fctMoreLINKS() {
    var btn = document.getElementById("btnlinks"), 
    linksmore = document.getElementById("links-more");
    
    if (btn.style.className === "noactive") {
      btn.className.replace("noactive", "active")
    } 
    else {
      btn.className.replace("active", "noactive")
    }
  }