document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente.");

    // Ejemplo: Cambiar el contenido del encabezado
    const header = document.querySelector("header h1");
    if (header) {
        header.addEventListener("click", () => {
            header.textContent = "¡Bienvenido a mi sitio web!";
            alert("Has hecho clic en el encabezado.");
        });
    }
});
