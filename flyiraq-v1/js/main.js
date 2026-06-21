/* Fly Iraq First — v1 (Dark Luxury) interactions · vanilla JS */
(function () {
  "use strict";

  var destinations = [
    { city: "Dubai",    country: "United Arab Emirates", img: "dest-dubai.jpg",    price: 199 },
    { city: "Istanbul", country: "Türkiye",              img: "dest-istanbul.jpg", price: 159 },
    { city: "London",   country: "United Kingdom",       img: "dest-london.jpg",   price: 499 },
    { city: "Paris",    country: "France",               img: "dest-paris.jpg",    price: 459 },
    { city: "Cairo",    country: "Egypt",                img: "dest-cairo.jpg",    price: 229 },
    { city: "Baghdad",  country: "Iraq · Home",          img: "dest-baghdad.jpg",  price: 89  }
  ];
  function money(n){ return "$" + n.toLocaleString("en-US"); }

  function renderDestinations(){
    var grid = document.getElementById("destGrid");
    if(!grid) return;
    grid.innerHTML = destinations.map(function(d){
      return '<article class="dest-card reveal">'
        + '<img src="'+d.img+'" alt="Flights to '+d.city+', '+d.country+'" loading="lazy" />'
        + '<div class="dest-info"><p class="country">'+d.country+'</p><h3>'+d.city+'</h3>'
        + '<p class="price">from <span>'+money(d.price)+'</span> one way</p></div></article>';
    }).join("");
    observeReveals();
  }

  function initNav(){
    var t=document.getElementById("navToggle"), n=document.getElementById("mainNav");
    if(!t||!n) return;
    t.addEventListener("click",function(){var o=n.classList.toggle("open");t.classList.toggle("open",o);t.setAttribute("aria-expanded",o);});
    n.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){n.classList.remove("open");t.classList.remove("open");t.setAttribute("aria-expanded","false");});});
  }
  function initHeader(){
    var h=document.getElementById("siteHeader"); if(!h) return;
    var f=function(){h.classList.toggle("scrolled",window.scrollY>10);};
    window.addEventListener("scroll",f,{passive:true}); f();
  }
  function initLang(){
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.addEventListener("click",function(){document.querySelectorAll(".lang-switch button").forEach(function(x){x.classList.remove("active");});b.classList.add("active");});
    });
  }
  function initTripTabs(){
    document.querySelectorAll(".trip-tab").forEach(function(t){
      t.addEventListener("click",function(){document.querySelectorAll(".trip-tab").forEach(function(x){x.classList.remove("active");});t.classList.add("active");});
    });
  }
  function initSwap(){
    var s=document.querySelector(".swap"); if(!s) return;
    s.addEventListener("click",function(){var a=document.getElementById("from"),b=document.getElementById("to");if(a&&b){var t=a.value;a.value=b.value;b.value=t;}});
  }
  function initDates(){
    var d=new Date(), fmt=function(x){return x.toISOString().slice(0,10);};
    var dep=document.getElementById("depart"), ret=document.getElementById("return");
    var d1=new Date(d.getTime()+7*864e5), d2=new Date(d.getTime()+14*864e5);
    if(dep){dep.value=fmt(d1);dep.min=fmt(d);} if(ret){ret.value=fmt(d2);ret.min=fmt(d1);}
  }
  var ro;
  function observeReveals(){
    if(!("IntersectionObserver" in window)){document.querySelectorAll(".reveal").forEach(function(e){e.classList.add("in");});return;}
    if(!ro){ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target);}});},{threshold:.12});}
    document.querySelectorAll(".reveal:not(.in)").forEach(function(e){ro.observe(e);});
  }

  document.addEventListener("DOMContentLoaded",function(){
    renderDestinations(); initNav(); initHeader(); initLang(); initTripTabs(); initSwap(); initDates(); observeReveals();
  });
})();
