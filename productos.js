// const productos =[
//     {Id: 1,nombre:'VentanaStandar',precio:4000},
//     {Id: 2,nombre:'VentanaBarra',precio:6000},
//     {Id: 3,nombre:'VentanReforzada',precio:8000},
// ]



// export{
//     productos
// }

const carrito = document.getElementById('carrito');
const platillos = document.getElementById('lista-platillos');
const listaPlatillos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// funcion para añair al carrito
cargarEventListeners();

function cargarEventListeners(){
    platillos.addEventListener('click',comprarPlatillo);

    carrito.addEventListener('click',eliminarPlatillo);

    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

    document.addEventListener('DOMContentLoaded',LeerLocalstorage);

}

function comprarPlatillo(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const platillo = e.target.parentElement.parentElement;
        leerDatosPlatillo(platillo);

    }
}
// funcion para leer datos
function leerDatosPlatillo(platillo){
    const infoPlatillo ={
        imagen:platillo.querySelector('img').src,
        titulo:platillo.querySelector('h4').text,
        precio:platillo.querySelector('.precio').text,
        id:platillo.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoPlatillo);
}

// insertar datos del carrito

function insertarCarrito(platillo){
    const row =document.createElement('tr');
    row.innerHTML=  `
     <td>
     <img src="${platillo.imagen}" with=100%>
     </td>
     <td> ${platillo.titulo}</td>
     <td> ${platillo.precio}</td>
     <td> <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</td>
    `;
    listaPlatillos.appendChild(row);
    guardarPlatilloLocalStorage(platillo);

}
// funcion que elimina producto del carrito
function eliminarPlatillo(e){
    e.preventDefault();
    let platillo,
    platilloId;
    if(e.target.classList.contains('borrar-platillo')){
        e.target.parentElement.parentElement.remove();
        platillo=e.target.parentElement.parentElement;
        platilloId = platillo.querySelector('a').getAttribute('data-id');
    }
    eliminarPlatilloLocalStorage(platilloId)
}
// funcion para eliminar carrito del DOM
function vaciarCarrito(){
    while(listaPlatillos.firstChild){
        listaPlatillos.removeChild(listaPlatillos.firstChild);
   }
    vaciarLocarStorage();
    return false;
}

// guardar platillos en el localStorage
function guardarPlatilloLocalStorage (platillo){
    let platillos;
    platillos=obtenerPlatillosLocalStorage();
    platillos.push(platillo);

    localStorage.setItem('platillos',JSON.stringify(platillos));

}
// comprobar que haya elementos en localStorage
function obtenerPlatillosLocalStorage(){
    let platillosLS;
    if(localStorage.getItem('platillos')=== null){
        platillosLS =[];
    }else{
        platillosLS= JSON.parse(localStorage.getItem('platillos'));

    }
    return platillosLS;

}
// imprimir productos en el carrito
 function LeerLocalstorage(){
     let platillosLS;
     platillosLS = obtenerPlatillosLocalStorage();
     platillosLS.forEach(function(platillo){
      const row =document.createElement('tr');
      row.innerHTML= `
      <td>
      <img src="${platillo.imagen}"width=100">
      </td>
      <td>${platillo.titulo}</td>
      <td>${platillo.precio}</td>
      <td><a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a>
      </td>
      `;
      listaPlatillos.appendChild(row);
     });
 }
//  eliminar platillo por id en localstorage

function eliminarPlatilloLocalStorage(platillo){
    let platillosLS;
    platillosLS = obtenerPlatillosLocalStorage();

    platillosLS.forEach(function(platillosLS,index){
     if(platillosLS.id ===platillo){
         platillosLS.splice(index,1);
     }
    });
    localStorage.setItem('platillos', JSON.stringify(platillosLS));
}
// elimina todos los platillos del localstorage
 function vaciarLocarStorage(){
     localStorage.clear();
 }