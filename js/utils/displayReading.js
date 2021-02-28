import { queries } from "./data.js";
import get from "./getElement.js";

const readingContainer = get("#reading-room");

// We take take an ID that we map (not func)
//  to modal/bootstrap tags
// And we do this one at a time
const showJacket = (queries, id) => {

    const uniqueLitObject = queries.find(element => element.id === id);
    const {title, genre, wc, text} = uniqueLitObject;
    // Since the text is stored as an Array object, we prep it
    const uText = text.map((item) => {
        return `<p>${item}</p>`;
    }).join("");

    readingContainer.innerHTML = `
            <div class="d-flex flex-column justify-content-between">
                <div class="reading border-bottom">
                    <h4>${title}</h4>
                </div>
                <div class="reading pt-2 px-2">
                    ${uText}
                </div>
                <div class="reading ml-auto">
                    <small class="m-auto">${wc} words</small>
                    <small class="m-auto">|</small>
                    <small class="m-auto text-italic">${genre}</small>
                </div>
            </div>
    `;
    
};

export default showJacket;
