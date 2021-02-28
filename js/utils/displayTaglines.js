const displayTaglines = (data) => {
  const domTaglines = data
    .map((item) => {
      const { id, title, tagline } = item;
      return `
            <div class="p-1 my-1 tagline">
                <small class="ml-4">${title}</small><br>
                <i id="quote-icon" class="fas fa-quote-left fa-1x bg-transparent d-inline pr-2"></i>
                <p class="d-inline">
                    <a id="${id}" class="uniqueWork" href="#reading-section">${tagline}</a>
                </p>
            </div>
    `;
    })
    .join("");
  return domTaglines;
};

export default displayTaglines;
