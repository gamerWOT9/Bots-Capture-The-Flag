window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("section1-navigation").style.padding = "30px 10px";
    document.getElementsByClassName("section1-logo").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("section1-navigation").style.padding = "80px 10px";
    document.getElementsByClassName("section1-logo").style.fontSize = "35px";
  }
}