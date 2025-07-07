
function crearMalla(malla) {
    const contenedor = document.getElementById("malla");
    malla.forEach((semestre, i) => {
        const fila = document.createElement("div");
        fila.className = "malla-row";
        semestre.ramos.forEach(r => {
            const div = document.createElement("div");
            div.className = "ramo";
            div.textContent = r.nombre;
            div.style.backgroundColor = colors[r.tipo] || "#fff";
            div.onclick = () => div.classList.toggle("aprobado");
            fila.appendChild(div);
        });
        contenedor.appendChild(fila);
    });
}
crearMalla(malla);
