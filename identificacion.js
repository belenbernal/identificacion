let user = "admin";
let password = 123;

function id(user,pass){
    switch (true) {
        case user==="admin" && pass===123:
            console.log("Bienvenido a nuestro sitio!");
            break;
        case user==="admin" && pass!=123:
            console.log("Contraseña incorrecta");
            break;
        case user!="admin" && pass===123:
            console.log("Usuario incorrecto");
            break;
        case user!="admin" && pass!=123:
                console.log("Usuario y Contraseña incorrectos");
                break;
        default:
            console.log("Debe ingresar los datos requeridos");
            break;
    }
}
id(user,password);