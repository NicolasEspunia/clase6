function suma (numero1, numero2) {
    return numero1 + numero2;}

    function resta (numero1,numero2) {
        return numero1 - numero2;}
        
        function iva(valorproducto){
            return valorproducto * 0.21
        }
        //----clase----------
        class Persona{
            constructor(nombre,ancho,alto){
                this.nombre = nombre;
                this.ancho = ancho;
                this.alto = alto;
                
                
            }
            saludar(){
                console.log('soy ' + this.nombre+ ' anchoventana ' + this.ancho + ' altoventana '+ this.alto) 
            }
        }
        
        const Nico =new Persona("Nico",1,2)
        console.log("Nico",Nico);
        Nico.saludar()


        
        let nombre = prompt("cual es tu nombre?")
        console.log("cliente "+ nombre);
        //---
        let ancho = parseInt (prompt("cuanto mide la ventana de ancho?"))
        //descuento por cada metro de ventana que compra
        let descuentoxmetro = 100;
        //precio x metro de alto y ancho
        let precioxancho = 5000;
        let precioxalto = 6000;
        
        let alto = parseInt (prompt("cuanto mide de alto?"))
        
        //valor x metro de ancho
        let total1 = resta(ancho * precioxancho,ancho * descuentoxmetro);
        console.log (" resultado1 " + total1);
        
        //valor x metro de alto
        let total2 = resta(alto * precioxalto,alto * descuentoxmetro);
        console.log ("resultado2 " + total2);
        let total = suma (total1,total2);
        console.log("resultadototal " + total); 
        
        //objeto
        const precioproducto = total
        const ivadelproducto = iva(precioproducto)
        const productoconiva = suma(precioproducto, ivadelproducto)
        
        function imprimirmensaje(mensaje){
            console.log(mensaje);
        }
        imprimirmensaje("resultadoconiva "+ productoconiva);
        
        alert(nombre+"! El valor de tu ventana es $"+ productoconiva)
        
        //array
        
        const prospectos =[];
        const cantidad = 2;
        
        do{
            
            prospectos.push(nombre);
            
        }while(prospectos.length <= cantidad)
        
        
        
        
          prospectos.push(nombre);
          console.log('tienes',prospectos.length,'clientes')
        
        
          for(let i=0;i<=prospectos.length;i++){
                  console.log('datos del prospecto',prospectos[i])
              }