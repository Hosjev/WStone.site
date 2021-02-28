import { queries } from "./data.js";
import get from "./getElement.js";

const myModal = get(".myModal");

// We take take an ID that we map (not func)
//  to modal/bootstrap tags
// And we do this one at a time
const displayQuery = (queries, id) => {

    const uniqueLitObject = queries.find(element => element.id === id);
    const {title, genre, wc, text} = uniqueLitObject;

    // Since the text is stored as an Array object, we prep it
    const uText = text.map((item) => {
        return `<p>${item}</p>`;
    }).join("");

    myModal.innerHTML = `
        <div class="modal dark text-dark mt-5" id="queryModal" role="dialog" tabindex="-1" style="display: block;">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-light">
                            <h4 class="modal-title">${title}</h4>
                            <button class="close modal-close" data-dismiss="modal">
                            <i class="fas fa-times fa-2x bg-transparent"></i>
                            </button>
                    </div>
                    <div class="modal-body">
                        ${uText}
                    </div>
                    <div class="modal-footer">
                        <small class="m-auto">${wc} words</small>
                        <small class="m-auto">|</small>
                        <small class="m-auto text-italic">${genre}</small>
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
