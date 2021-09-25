let elemento = JSON.parse(localStorage.getItem('elemento'))

//if de guarda
if(!elemento){
    elemento=[]
}
const getAll =() => {
    return elemento
}



const create =(elementos)=> {
elemento.push(elementos)
localStorage.setItem('elemento',JSON.stringify(elemento))

}


/*
//findone obtener uno se puede hallar por id
const findOne =(id) => {
   const carroLista = carro.find(producto =>producto.id === id)
if(!carroLista){
    throw Error ('no existe carro con ese id')
}
return carroLista
}
//actualizar (precio)
const update =(id, precio) => {
    const producto =findOne(id)
    producto.precio =precio
}
//eliminar producto
const remove =(id)=>{
    const producto =findOne (id)
    const index =carro.findIndex(producto =>producto.id ===id)
    if(index >=0){
        carro.splice(index,1)
    }
}
*/

export {
    create,
    getAll
}