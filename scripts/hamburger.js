const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

toggle.addEventListener("click", function() {
  if (siteNav.classList.contains("site-nav--open")) {
    siteNav.classList.remove("site-nav--open");
    toggle.classList.remove("open");

    siteNav.classList.add("site-nav--closed");
  }

  else {
    siteNav.classList.remove("site-nav--closed");
    toggle.classList.add("open");

    siteNav.classList.add("site-nav--open");
  }
  // siteNav.classList.toggle("site-nav--open");
  // toggle.classList.toggle("open");
});
