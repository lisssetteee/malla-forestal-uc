
fetch(dataFile)
  .then(res => res.json())
  .then(data => {
    fetch(colorsFile)
      .then(res => res.json())
      .then(colors => renderMalla(data, colors));
  });

function renderMalla(data, colors) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = data.meta.name;
  app.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  for (let term = 1; term <= 10; term++) {
    const column = document.createElement("div");
    column.className = "col";
    const header = document.createElement("h3");
    header.textContent = `Semestre ${term}`;
    column.appendChild(header);

    const courses = data.courses.filter(c => c.term === term);
    for (const c of courses) {
      const box = document.createElement("div");
      box.className = "ramo";
      box.textContent = `${c.name}`;
      box.style.backgroundColor = colors[c.category] || "#ddd";
      column.appendChild(box);
    }

    grid.appendChild(column);
  }

  app.appendChild(grid);
}
