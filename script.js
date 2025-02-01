// Obtener los elementos
const cartaCerrada = document.getElementById('cartaCerrada');
const cartaAbierta = document.getElementById('cartaAbierta');
const abrirCarta = document.getElementById('abrirCarta');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

// Función para abrir la carta
abrirCarta.addEventListener('click', function() {
    cartaCerrada.style.display = 'none'; // Ocultar carta cerrada
    cartaAbierta.style.display = 'block'; // Mostrar carta abierta
});

// Función para el botón "Sí"
btnSi.addEventListener('click', function() {
    mensaje.innerHTML = "Has tomado la mejor decisión de tu vida, no te vas a arrepentir, te amo pastelito. 💖";
    btnSi.disabled = true; // Deshabilitar el botón "Sí"
    btnNo.disabled = true; // Deshabilitar el botón "No"
});

// Función para el botón "No"
btnNo.addEventListener('click', function() {
    // Mover el botón "No" verticalmente hacia abajo y luego hacia arriba repetidamente
    let counter = 0;
    
    // Función para mover el botón
    function moveButton() {
        if (counter < 3) { // Mueve el botón 3 veces
            btnNo.style.transform = 'translateY(30px)'; // Mover hacia abajo
            setTimeout(function() {
                btnNo.style.transform = 'translateY(-30px)'; // Mover hacia arriba
            }, 300); // Mueve después de 0.3 segundos

            counter++;
            setTimeout(moveButton, 600); // Llamar nuevamente a la función para seguir el movimiento
        }
    }

    moveButton();
});