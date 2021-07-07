import get from "./utils/getElement.js";

const topLink = get(".to-top-link");
const mobileNav = get("#navCollapse");
const mainContainer = get("main");

// Load tagline section after DOM
window.addEventListener("DOMContentLoaded", () => {
  // listens for mouseover, remove mobile nav menu if open
  mainContainer.addEventListener("mouseover", () => {
    if (mobileNav.classList.contains("show")) {
      mobileNav.classList.remove("show");
    }
  })

});


// Add listener to fixed-bottom pointer for back to top button
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 385) {
    topLink.classList.add("show-to-top-link");
  } else {
    topLink.classList.remove("show-to-top-link");
  }
});
