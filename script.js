document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessageDiv = document.getElementById('errorMessage');

    // Datos quemados (simulación)
    const hardcodedUser = "maria";
    const hardcodedPass = "maria";

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        errorMessageDiv.textContent = ''; 

        if (username.trim() === "" || password.trim() === "") {
            errorMessageDiv.textContent = 'Por favor, completa ambos campos.';
            return;
        }

        if (username === hardcodedUser && password === hardcodedPass) {
            // Redirigir a panel.html
            window.location.href = "panel.html"; 
            
            // Opcional: puedes mostrar una alerta breve antes de redirigir si lo deseas
            // alert('¡Inicio de sesión exitoso! Bienvenido.');
            // loginForm.reset(); // No es tan necesario si vas a redirigir inmediatamente
        } else {
            errorMessageDiv.textContent = 'Usuario o contraseña incorrectos.';
        }
    });
});