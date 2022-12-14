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
  var hello = document.getElementsByClassName("helloworld")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      hello[0].style.display = "grid";
    } else {
      reveals[i].classList.remove("active");
      hello[0].style.display = "none";
    }
  }
}

window.addEventListener("scroll", reveal);



/*
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  var sb1 = document.getElementById("sb1id-links")

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("links-section-more");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("noactive");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" noactive", " active");
    document.getElementById(cityName).style.display = "flex";
    sb1.style.height = "160px";  
  }

  tablinks = document.getElementsByClassName("active");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", " noactive");
    document.getElementById(cityName).style.display = "flex";
    sb1.style.height = "72px";  
  }
}
*/
/*
function openCity(evt, cityName) {
  var i, sectionmore, noactive;
  var sb1 = document.getElementById("sb1id-links")
  var btnlinks = document.getElementById("btnlinks")
  let elm = document.getElementById('btnlinks');

  tabcontent = document.getElementsByClassName("links-section-more");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  if(elm.classList.contains("noactive")){
    tablinks = document.getElementsByClassName("noactive");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" noactive", " active");
      document.getElementById(cityName).style.display = "flex";
      sb1.style.height = "160px";  
    }
  }
  else if(elm.classList.contains("active")){
    tablinks = document.getElementsByClassName("active");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", " noactive");
      document.getElementById(cityName).style.display = "flex";
      sb1.style.height = "72px";  
    }
  }
}*/
