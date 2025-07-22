window.onload = function() {
    const passwordInput = document.querySelector('.clave');
    const numberButtons = document.querySelectorAll('.tecla:not(.borrar):not(.confirmar)');
    const deleteButton = document.querySelector('.borrar');
    const confirmButton = document.querySelector('.confirmar');
    const correctPassword = "1234";
    
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            passwordInput.value += this.value.trim();
            console.log("Valor actual:", passwordInput.value);
        });
    });
    
    deleteButton.addEventListener('click', function() {
        passwordInput.value = passwordInput.value.slice(0, -1);
        console.log("Borrado - Valor actual:", passwordInput.value);
    });
    
    confirmButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            alert("¡Acceso concedido! Ha ingresado correctamente.");
            passwordInput.value = "";
        } else {
            alert(`Contraseña incorrecta. Ingresaste: ${passwordInput.value}`);
            passwordInput.value = "";
        }
    });
};