window.onload = function() {
    const passwordInput = document.querySelector('.clave');
    const teclado = document.getElementById('teclado');
    const correctPassword = "1234";

    // Obtén los valores numéricos
    const numeros = ['1','2','3','4','5','6','7','8','9','0'];

    // Función para mezclar el array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Mezcla los números y reconstruye los botones
    function renderTeclado() {
        // Guarda los botones especiales
        const borrarBtn = teclado.querySelector('.borrar');
        const confirmarBtn = teclado.querySelector('.confirmar');

        // Elimina todos los botones numéricos
        teclado.querySelectorAll('.tecla:not(.borrar):not(.confirmar)').forEach(btn => btn.remove());

        // Mezcla y agrega los botones numéricos
        shuffle(numeros).forEach(num => {
            const btn = document.createElement('input');
            btn.type = 'button';
            btn.value = num;
            btn.className = 'tecla';
            btn.addEventListener('click', function() {
                passwordInput.value += this.value.trim();
                console.log("Valor actual:", passwordInput.value);
            });
            teclado.insertBefore(btn, borrarBtn);
        });
    }

    renderTeclado();

    // Eventos para borrar y confirmar
    teclado.querySelector('.borrar').addEventListener('click', function() {
        passwordInput.value = passwordInput.value.slice(0, -1);
        console.log("Borrado - Valor actual:", passwordInput.value);
    });

    teclado.querySelector('.confirmar').addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            alert("¡Acceso concedido! Ha ingresado correctamente.");
            passwordInput.value = "";
            renderTeclado(); // Mezcla los números después de confirmar
        } else {
            alert(`Contraseña incorrecta. Ingresaste: ${passwordInput.value}`);
            passwordInput.value = "";
            renderTeclado(); // Mezcla los números después de intentar
        }
    });
};