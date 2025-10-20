
# WebChat

Una aplicación web de mensajería en línea enfocada en la **simplicidad, seguridad y privacidad** de la comunicación digital.

## 🔐 Características Principales

- **Privacidad**: Cifrado de extremo a extremo
- **Simplicidad**: Interfaz ligera y funcional
- **Seguridad**: La clave de cifrado nunca abandona el cliente
- **Conexiones 1:1**: Solo sesiones privadas entre dos usuarios
- **Arquitectura minimalista**: Backend basado en Firebase

## 🏗️ Arquitectura del Sistema

### 1. Autenticación de Usuarios
- Acceso mediante correo electrónico y contraseña
- Gestión de autenticación a través de **Firebase Authentication**
- Validación de usuarios para acceso a la plataforma

### 2. Chat Secreto 1 a 1
- **PIN de intercambio**: Identificador único de sesión generado automáticamente
- **Clave de cifrado personalizada**: Definida por el usuario y **nunca almacenada** en la base de datos
- **Cifrado local**: Todos los mensajes se cifran/descifran en el navegador
- **Almacenamiento seguro**: Firebase solo guarda mensajes en forma cifrada

## 🛡️ Flujo de Seguridad

1. Los usuarios establecen un canal privado usando PIN + clave de cifrado
2. Los mensajes se cifran localmente antes del envío
3. Firebase almacena únicamente el contenido cifrado
4. Los mensajes se descifran localmente al recibirlos
5. El servidor nunca tiene acceso al contenido real

## 🎯 Objetivo

Proporcionar una **alternativa ligera para comunicaciones privadas** y servir como **plataforma de experimentación** en desarrollo web y ciberseguridad.

## 🚀 Tecnologías

- Frontend: Web (navegador)
- Backend: Firebase (Authentication + Database)
- Cifrado: Implementación local en JavaScript
