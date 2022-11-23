window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("section1-idnav").style.padding = "0 var(--responsivePadding)";
    document.getElementById("section1-idlogo").style.margin = "1px";
    document.getElementById("sb1-idbg").style.display = "none";
    document.getElementById("section1-idlinks").style.translate = "0px";
    document.getElementById("section1-idlinks").style.opacity = "1";
    document.getElementById("sb1-idimglogo").style.height = "50px";
  } else {
    document.getElementById("section1-idnav").style.padding = "80px 150px";
    document.getElementById("section1-idlogo").style.margin = "auto";
    document.getElementById("sb1-idbg").style.display = "block";
    document.getElementById("section1-idlinks").style.translate = "20px 50px";
    document.getElementById("section1-idlinks").style.opacity = "0";
    document.getElementById("sb1-idimglogo").style.height = "150px";
  }
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);