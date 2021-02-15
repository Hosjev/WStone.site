import { queries } from "./utils/data.js";
import displayQueryModal from "./utils/displayQueryModal.js";
import displayTaglines from "./utils/displayTaglines.js";
import get from "./utils/getElement.js";

const taglineContainer = get("#taglines");

// load some results after DOM
window.addEventListener("DOMContentLoaded", () => {
  taglineContainer.innerHTML = displayTaglines(queries);
  
  // get all doc objects class=uniqueWork
  const domLitWorks = document.querySelectorAll(".uniqueWork");
  domLitWorks.forEach(function(item) {
    item.addEventListener("click", () => {
      displayQueryModal(queries, parseInt(item.id));
    })
  })
});