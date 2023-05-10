export function auth(tokkenGenerated){
    //const tokken = tokkenGenerated;
    const tokken = "tokkenTesting" // tokken generado para usuario una vez logeado correctamente
    // Obtener la fecha actual
    const now = new Date();
    
    // Crear una fecha de caducidad para la cookie (1 día después de la fecha actual)
    const expireDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Crear la cookie con el valor deseado y la fecha de caducidad
    document.cookie = `miCookie=${tokken}; expires=${expireDate.toUTCString()}`;


}