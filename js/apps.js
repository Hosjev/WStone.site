import { queries } from "./utils/data.js";
import displayQueryModal from "./utils/displayQueryModal.js";
import displayTaglines from "./utils/displayTaglines.js";
import get from "./utils/getElement.js";

const taglineContainer = get("#taglines");
const topLink = get(".to-top-link");

// Load tagline section after DOM
window.addEventListener("DOMContentLoaded", () => {
  // displayTaglines returns our individual and current data
  // for reading material
  taglineContainer.innerHTML = displayTaglines(queries);
  
  // Get all DOM objects class=uniqueWork
  // and add click events for their IDs
  const domLitWorks = document.querySelectorAll(".uniqueWork");
  domLitWorks.forEach(function(item) {
    item.addEventListener("click", () => {
      displayQueryModal(queries, parseInt(item.id));
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
