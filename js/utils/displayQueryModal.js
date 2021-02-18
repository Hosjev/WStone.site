import { queries } from "./data.js";
import get from "./getElement.js";

const myModal = get(".myModal");

// will take an ID that we map (not func) to modal/bootstrap tags
const displayQuery = (queries, id) => {

    const uniqueLitObject = queries.find(element => element.id === id);
    const uText = uniqueLitObject.text.map((item) => {
        return `<p>${item}</p>`;
    }).join("");

    myModal.innerHTML = `
        <div class="modal dark text-dark mt-5" id="queryModal" style="display: block;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="d-inline modal-title">${uniqueLitObject.title}</h4>
                        <small class="d-inline m-auto">wordcount - ${uniqueLitObject.wc}</small>
                        <button class="close modal-close" data-dismiss="modal">
                            <i class="fas fa-times fa-2x bg-transparent"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${uText}
                    </div>
                </div>
            </div>
        </div>
    `;
    

    // get close button
    const closeBtn = get(".modal-close");
    const modal = get("#queryModal");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
};

export default displayQuery;
