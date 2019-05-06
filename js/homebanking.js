iniciarSesion()
//Declaración de variables
var nombreUsuario = "Plataforma5";
var saldoCuenta = 15000;
var limiteExtraccion = 3000;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cambiarLimiteDeExtraccion=prompt("ingrese el monto al que quiere permitir como maximo para extracciones");
    while (isNaN(cambiarLimiteDeExtraccion)==true)cambiarLimiteDeExtraccion=prompt("Ingrese un monton correcto");
    if (cambiarLimiteDeExtraccion==null) return alert("usted no ingreso datos se mantedra el limite actual")
    limiteExtraccion=cambiarLimiteDeExtraccion
    alert("Su nuevo limite de extraccion es: "+ limiteExtraccion)
    actualizarLimiteEnPantalla()   
}
function extraerDinero() {
    var quitarDeDinero= prompt("Ingrese el monto que quiere depositar")
    var auxiliar
    while (isNaN(quitarDeDinero)==true)quitarDeDinero=prompt("Ingrese un monton correcto");
    if (quitarDeDinero==null)return actualizarSaldoEnPantalla();
    else if(quitarDeDinero>saldoCuenta)return alert("Uste no tiene suficiente fondos para extraer")
    auxiliar=saldoCuenta
    saldoCuenta-=parseInt(quitarDeDinero)
    alert("Su saldo es: "+auxiliar+"\n"+"Usted retirar: "+ quitarDeDinero+"\n"+"Dinero actual: "+saldoCuenta)
    actualizarSaldoEnPantalla()
}

function depositarDinero() {
    var ingresoDeDinero= prompt("Ingrese el monto que quiere depositar")
    var auxiliar
    while (isNaN(ingresoDeDinero)==true)ingresoDeDinero=prompt("Ingrese un monton correcto")
    if (ingresoDeDinero==null)return actualizarSaldoEnPantalla()
    auxiliar=saldoCuenta
    saldoCuenta+=parseInt(ingresoDeDinero)
    alert("Su saldo es: "+auxiliar+"\n"+"Usted depositara: "+ ingresoDeDinero+"\n"+"Dinero actual: "+saldoCuenta)
    actualizarSaldoEnPantalla()
}

function pagarServicio() {
    var servicio1=540,servicio2=500,servicio3=350;
    var servicioAPagar=prompt("ingrese el servicio a pagar:"+"\n"+"Agua: "+servicio1+"\n"+"Luz: "+servicio2+"\n"+"Gas: "+servicio3)
    alert("hola entraste aqui")
    //while (servicioAPagar!=="1" ||servicioAPagar!=="2" ||servicioAPagar!=="3"){
        //servicioAPagar=prompt("ingrese un correcto servicio a pagar:"+"\n"+"Agua: "+servicio1+"\n"+"Luz: "+servicio2+"\n"+"Gas: "+servicio3)
    //}
    return "pagado"
}


function transferirDinero() {
    /// tengo que terminar de completar este apartado :)
    var cuenta1= 3422345882,cuenta2=3277377722,cuenta3=125623772

    var seleccionDeCuentas=prompt("selecione la cuenta a la que quieres transferir dinero:"+"\n"+"1-"+cuenta1+"\n"+"2-"+cuenta2+"\n"+"3-"+cuenta3)//colocado a modo de ejemplo
    alert("usted selecion la cuenta: "+ seleccionDeCuentas) 
    var transferirDinero=prompt("ingrese el dinero que desea tranferir")
    var auxiliar
    while (isNaN(transferirDinero)==true)transferirDinero=prompt("Ingrese un monton correcto")
    if (transferirDinero==null)return actualizarSaldoEnPantalla()
    auxiliar=saldoCuenta
    saldoCuenta-=parseInt(transferirDinero)
    alert("Su saldo es: "+auxiliar+"\n"+"Usted va transferir: "+ transferirDinero+"\n"+"\n"+"Dinero actual: "+saldoCuenta)
    actualizarSaldoEnPantalla()
}

function iniciarSesion() {
    var usuario=["plataforma5",1234]
    var usuarioIngresado=(prompt("ingrese un usuario. "))
    var contraseñaIngresada=(prompt("ingrese su contraseña."))

    if (usuarioIngresado==usuario[0] && contraseñaIngresada==usuario[1] ) {
        return alert("BIENVENIDO "+usuarioIngresado)
    }else{
        alert("ingrese un usuario correcto por favor")
        return iniciarSesion()}


}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
} ;