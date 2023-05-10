import { loader } from "./components/loader.js";
import { auth } from "./auth.js";
import { home } from "./pages/home.js"

const  HtmlLogin = `
<div id="form_login" class="text-center">
    <div class="form-signin">
        <img  class="mb-4" src="./img/icon.png" alt="logo icono">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputUser" class="sr-only">User</label>
        <input type="text" id="inputUser" class="form-control" placeholder="User" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button id="btn_login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; Tournament Master 2023</p>
    </div>
</div>
`;

export function login (){
    const content = document.getElementById('content')
    content.innerHTML = HtmlLogin

    $("#btn_login").click(function (){
        
        const user = document.getElementById('inputUser').value
        const password = document.getElementById('inputPassword').value
        if (user.trim() === '' || password.trim() === '') {
            Toastify({
                text: `Datos Incorrectos`,
                className: "alert",
                style: {
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)" 
              
                }
              }).showToast();
        } else {
        // enviar los datos con fetch() o cualquier otra forma de envío
        loader(); 
        
        const data = new FormData();
        data.append('user', user);
        data.append('password', password);

        // Enviar la solicitud POST a la URL /login
        fetch('/login', {
        method: 'POST',
        body: data
        })
        .then(response => {
        if (response.ok) {

            auth(response.tokkengenerated);
            home();
            
            // La respuesta es exitosa
            // Hacer algo con la respuesta
            
        } else {
            // La respuesta es un error
            content.innerHTML = HtmlLogin;
            Toastify({
                text: `Contraseña o usuaio incorrecto`,
                className: "alert",
                style: {
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)" 
              
                }
              }).showToast();
            throw new Error('Error en la solicitud');
        }
        })
        .catch(error => {
        console.error('Error en la solicitud:', error);
        Toastify({
            text: `Error en la red`,
            className: "alert",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)" 
          
            }
          }).showToast();
        content.innerHTML = HtmlLogin;
        });
        }
    })
}
