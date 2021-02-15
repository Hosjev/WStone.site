const displayTaglines = (data) => {
  const domTaglines = data
    .map((item) => {
      const { id, tagline } = item;
      return `
            <div class="p-1 tagline">
                <i class="fas fa-quote-left fa-1x bg-transparent d-inline pr-2"></i>
                <p class="d-inline">
                    <a id="${id}" class="uniqueWork" href="#tagline-head">${tagline}</a>
                </p>
            </div>
    `;
    })
    .join("");
  return domTaglines;
};

export default displayTaglines;
