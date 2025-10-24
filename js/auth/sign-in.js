// sign-in.js

// 1. Importar la instancia 'auth' y la función de Firebase
import { auth } from "../firebase-init.js"; // Asegúrate que esta ruta sea correcta
import { signInWithEmailAndPassword } from "firebase/auth";

// 2. Obtener referencias del DOM
const loginForm = document.querySelector(".formulario--ingreso");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// 3. Función para manejar el inicio de sesión
const handleLogin = async (event) => {
    // Evita que el formulario se envíe de forma predeterminada (lo que recarga la página)
    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Por favor, ingresa correo y contraseña.");
        return;
    }
    
    // Ocultar botón y mostrar un spinner, si tuvieras uno...
    // loginButton.disabled = true;

    try {
        // Llama a la función de Firebase para iniciar sesión
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Inicio de sesión exitoso:", user);
        alert("¡Bienvenido!");
        
        // REDIRECCIONAR al tablero
        window.location.href = "../tablero/tablero.html";

    } catch (error) {
        console.error("Error al iniciar sesión:", error.code, error.message);
        
        // Mostrar un mensaje de error claro al usuario
        let errorMessage = "Error al iniciar sesión. Verifica tus credenciales.";
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
             errorMessage = "Correo o contraseña incorrectos.";
        }
        alert(errorMessage);
        
    } finally {
        // Volver a habilitar el botón
        // loginButton.disabled = false;
    }
};

// 4. Adjuntar el escuchador de eventos al formulario
loginForm.addEventListener("submit", handleLogin);