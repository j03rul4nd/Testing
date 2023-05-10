import { home } from './app/pages/home.js'
import { login } from './app/login.js';

//login? 
// Función para obtener el valor de una cookie
function getCookie(name) {
    // Divide la cookie en pares de clave/valor
    const cookies = document.cookie.split(';');
  
    // Recorre los pares de clave/valor para encontrar la cookie deseada
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      // Si la cookie tiene el nombre deseado, devuelve su valor
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
  
    // Si la cookie no se encuentra, devuelve null
    return null;
  }
  
  // Verificar si existe una cookie llamada "miCookie"
  if (getCookie('miCookie') !== null) {
    // La cookie existe
    // Obtener su valor
    const valor = getCookie('miCookie');
    console.log(`El valor de la cookie es: ${valor}`);
    home();
  } else {
    // La cookie no existe
    console.log('La cookie no existe');
    login();
  }