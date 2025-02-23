// Función para alternar la visibilidad de los detalles de cada integrante
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
        return
    } else {
        details.style.display = "block";
    }
}