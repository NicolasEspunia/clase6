import {productos} from "./productos.js";
 console.log(productos)
import {create,getAll} from "./crud.js";

const carrito =[];

for( const item of productos) {
    $('#app').append(
    `<div> 
        <div>
        ${item.nombre}  <span>$ ${item.precio}</span>
        </div>
    <button id='btn-${item.Id}'> Agregar</button>
    </div>`
    )

     $(`#btn-${item.Id}`).on('click',function(){
         console.log(`clickeaste ${JSON.stringify(item)}`);
            create(JSON.stringify(item))
    //        //carrito.push(item)
    //        //showCarrito ()
        
    })
}
$('#btn-carrito').on('click',() =>{
    const items = getAll()
    for(const item of items){
        $('#carrito').prepend(
            `<div>${JSON.parse(item).nombre}</div>`
        )
    }
})

const showCarrito = () => {
    for (const item of carrito){
        $('#listadeproductos').prepend(
            `<li>${item.nombre} </li> `
        )
    }
}

//AGREGAR PRODUCTO
//let producto = {id:4,nombre:"PuertaBalcon",precio:7000}
//console.log(producto);