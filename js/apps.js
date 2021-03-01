import { queries } from "./utils/data.js";
import displayTaglines from "./utils/displayTaglines.js";
import showJacket from "./utils/displayReading.js";
import get from "./utils/getElement.js";

const taglineContainer = get("#taglines");
const topLink = get(".to-top-link");

// Load tagline section after DOM
window.addEventListener("DOMContentLoaded", () => {
  // displayTaglines returns our individual and current data
  // for reading material
  taglineContainer.innerHTML = displayTaglines(queries);
  
  // Display content of featured work in reading room
  showJacket(queries, 1);

  // Make reading for featured work
  const featuredWork = get("#featured-work");
  featuredWork.addEventListener("click", () => {
    showJacket(queries, 1);
  })

  // Get all DOM objects class=uniqueWork
  // and add click events for their IDs
  const domLitWorks = document.querySelectorAll(".uniqueWork");
  domLitWorks.forEach(function(item) {
    item.addEventListener("click", () => {
      showJacket(queries, parseInt(item.id));
    })
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
