window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("section1-idnav").style.padding = "0 var(--responsivePadding)";
    document.getElementById("section1-idlogo").style.margin = "1px";
    document.getElementById("sb1-idbg").style.display = "none";
    document.getElementById("section1-idlinks").style.display = "flex";
  } else {
    document.getElementById("section1-idnav").style.padding = "80px 150px";
    document.getElementById("section1-idlogo").style.margin = "auto";
    document.getElementById("sb1-idbg").style.display = "block";
    document.getElementById("section1-idlinks").style.display = "none";
  }
}