/* Fly Iraq First — v2 interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---- Destination data (note: single $, correct currency formatting) ---- */
  var destinations = [
    { city: "Dubai",     country: "United Arab Emirates", img: "images/dest-dubai.jpg",    price: 199 },
    { city: "Istanbul",  country: "Türkiye",              img: "images/dest-istanbul.jpg", price: 159 },
    { city: "London",    country: "United Kingdom",       img: "images/dest-london.jpg",   price: 499 },
    { city: "Paris",     country: "France",               img: "images/dest-paris.jpg",    price: 459 },
    { city: "Cairo",     country: "Egypt",                img: "images/dest-cairo.jpg",    price: 229 },
    { city: "Baghdad",   country: "Iraq · Home",          img: "images/dest-baghdad.jpg",  price: 89  }
  ];

  function money(n) {
    return "$" + n.toLocaleString("en-US");
  }

  function renderDestinations() {
    var grid = document.getElementById("destGrid");
    if (!grid) return;
    grid.innerHTML = destinations.map(function (d) {
      return (
        '<article class="dest-card reveal">' +
          '<img src="' + d.img + '" alt="Flights to ' + d.city + ', ' + d.country + '" loading="lazy" />' +
          '<div class="dest-info">' +
            '<p class="country">' + d.country + '</p>' +
            '<h3>' + d.city + '</h3>' +
            '<p class="price">from <span>' + money(d.price) + '</span> one way</p>' +
          '</div>' +
        '</article>'
      );
    }).join("");
    // re-observe the freshly injected reveal elements
    observeReveals();
  }

  /* ---- Mobile nav ---- */
  function initNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Header shadow on scroll ---- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Language switch (visual demo toggle) ---- */
  function initLang() {
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".lang-switch button").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
      });
    });
  }

  /* ---- Trip tabs ---- */
  function initTripTabs() {
    document.querySelectorAll(".trip-tab").forEach(function (t) {
      t.addEventListener("click", function () {
        document.querySelectorAll(".trip-tab").forEach(function (x) {
          x.classList.remove("active");
          x.setAttribute("aria-selected", "false");
        });
        t.classList.add("active");
        t.setAttribute("aria-selected", "true");
      });
    });
  }

  /* ---- Swap origin/destination ---- */
  function initSwap() {
    var swap = document.querySelector(".swap");
    if (!swap) return;
    swap.addEventListener("click", function () {
      var from = document.getElementById("from");
      var to = document.getElementById("to");
      if (from && to) { var t = from.value; from.value = to.value; to.value = t; }
    });
  }

  /* ---- Scroll reveal ---- */
  var revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---- Sensible default dates in the booking widget ---- */
  function initDates() {
    var d = new Date();
    var fmt = function (date) { return date.toISOString().slice(0, 10); };
    var depart = document.getElementById("depart");
    var ret = document.getElementById("return");
    var dep = new Date(d.getTime() + 7 * 864e5);
    var rtn = new Date(d.getTime() + 14 * 864e5);
    if (depart) { depart.value = fmt(dep); depart.min = fmt(d); }
    if (ret) { ret.value = fmt(rtn); ret.min = fmt(dep); }
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderDestinations();
    initNav();
    initHeader();
    initLang();
    initTripTabs();
    initSwap();
    initDates();
    observeReveals();
  });
})();
