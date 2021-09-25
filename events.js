const btn =document.getElementById('btn')
const form =document.getElementById('form')

const inputNombre =document.getElementById('input-Nombre')
const inputApellido =document.getElementById('input-Apellido')
const inputDireccion =document.getElementById('input-Direccion')
const inputTelefono =document.getElementById('input-Telefono')
const inputancho =document.getElementById('input-ancho')
const inputalto =document.getElementById('input-alto')

//evento en el boton enviar
btn.onclick =() => {
    console.log(`Nombre: ${inputNombre.value}`)
    console.log(`Apellido:${inputApellido.value}`)
    console.log(`Direccion:${inputDireccion.value}`)
    console.log(`Telefono: ${inputTelefono.value}`)
    console.log(`Ancho: ${inputancho.value}`)
    console.log(`Alto: ${inputalto.value}`)




//funciones
function suma (numero1, numero2) {
    return numero1 + numero2;}

    function resta (numero1,numero2) {
        return numero1 - numero2;}
        
        function iva(valorproducto){
            return valorproducto * 0.21
        }

//descuento por cada metro de ventana que compra
let descuentoxmetro = 100;
//precio x metro de alto y ancho
let precioxancho = 5000;
let precioxalto = 6000;



//valor x metro de ancho
let total1 = resta(inputancho.value * precioxancho,inputancho.value * descuentoxmetro);
// console.log (" resultado1 " + total1);

//valor x metro de alto
let total2 = resta(inputalto.value * precioxalto,inputalto.value * descuentoxmetro);
// console.log ("resultado2 " + total2);
let total = suma (total1,total2);
// console.log("resultadototal " + total); 

//objeto
let precioproducto = total
let ivadelproducto = iva(precioproducto)
const productoconiva = suma(precioproducto, ivadelproducto)

function imprimirmensaje(mensaje){
    console.log(mensaje);
}
imprimirmensaje("resultadoconiva "+ productoconiva);




alert('El valor de tu ventana es: $'+ productoconiva )
}
//eventos del teclado
// inputNombre.onkeydown =() => {
//     console.log('cantidad de tipeos')
// }

//prevent default
form.onsubmit =(event) =>{
    event.preventDefault()
    console.log(event.target)
    //para poder resetear los datos del form
    // inputNombre.value = ''
    // inputApellido.value = ''
    // inputDireccion.value = ''
    // inputTelefono.value = ''
    // inputancho.value = ''
    // inputalto.value = ''
    //resetear los datos del form
    form.reset ()
}
