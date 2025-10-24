// firebase-init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCSq3-9qz7eoPRmbpYFFnmXCaOV2L7opMo",
    authDomain: "webchateo.firebaseapp.com",
    projectId: "webchateo",
    storageBucket: "webchateo.firebasestorage.app",
    messagingSenderId: "14516723957",
    appId: "1:14516723957:web:4f1d72c05a401923d125bc",
    measurementId: "G-T64BLL7200"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa y EXPORTA la instancia de Autenticación
const auth = getAuth(app); 

// Puedes exportar 'auth' directamente
export { auth };