// sign-up.js

// 1. Importar la instancia 'auth' y la función de Firebase para crear usuario
import { auth } from "../firebase-init.js"; // Asegúrate de que la ruta sea correcta
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// 2. Obtener referencias del DOM
const registrationForm = document.querySelector(".formulario--registro");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("terms"); 

// 3. Función para manejar el registro de usuario
const handleRegistration = async (event) => {
    // Prevenir el envío estándar del formulario y la recarga de la página
    event.preventDefault(); 

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validación básica
    if (!username || !email || !password || !termsCheckbox.checked) {
        alert("Por favor, completa todos los campos y acepta los términos.");
        return;
    }
    
    // Opcional: Deshabilitar el botón de registro
    // event.target.querySelector('button[type="submit"]').disabled = true;

    try {
        // 4. Llama a la función de Firebase para crear un usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Opcional: Actualizar el perfil para añadir el nombre de usuario (displayName)
        await updateProfile(user, {
            displayName: username
        });

        console.log("Registro exitoso:", user);
        alert(`¡Cuenta creada para ${user.displayName}! Redirigiendo...`);
        
        // 5. Redireccionar al usuario a su tablero/área privada
        window.location.href = "../tablero/tablero.html";

    } catch (error) {
        console.error("Error al registrar el usuario:", error.code, error.message);
        
        // Manejo de errores de Firebase comunes
        let errorMessage = "Ocurrió un error al registrar. Inténtalo de nuevo.";
        
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = "Este correo electrónico ya está registrado.";
                break;
            case 'auth/invalid-email':
                errorMessage = "El formato del correo electrónico es inválido.";
                break;
            case 'auth/weak-password':
                errorMessage = "La contraseña debe tener al menos 6 caracteres.";
                break;
            // Otros errores...
        }
        
        alert(errorMessage);
        
    } finally {
        // Opcional: Volver a habilitar el botón de registro
        // event.target.querySelector('button[type="submit"]').disabled = false;
    }
};

// 6. Adjuntar el escuchador de eventos al formulario
registrationForm.addEventListener("submit", handleRegistration);