document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){

    vigencia();
    detallesModal();
}



function vigencia(){
    rango = document.getElementById("rangoTiempo");
    if(rango){
        rango.addEventListener("change", function () {
            let rangoSeleccionado = rango.value; 
            let celdasPrecio = document.querySelectorAll(".precio");

            celdasPrecio.forEach(celda => {
                celda.innerText = "$" + celda.getAttribute(`data-${rangoSeleccionado}`);
            });
        });
    };
}

function detallesModal(){
    const modal = document.getElementById("modalDetalles");
    const btn = document.getElementById("verDetallesBtn");
    const closeBtn = document.querySelector(".close");

    // Abrir modal
    btn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Cerrar modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}