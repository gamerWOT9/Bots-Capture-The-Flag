window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("section1-idnav").style.padding = "0 var(--responsivePadding)";
    document.getElementById("section1-idlogo").style.fontSize = "25px";
  } else {
    document.getElementById("section1-idnav").style.padding = "80px 150px";
    document.getElementById("section1-idlogo").style.fontSize = "35px";
  }
}