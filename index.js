const nombreUsuario = prompt('ingrese su nombre')

alert('Bienvenido: ' + nombreUsuario)

class Producto {
    constructor(nombre, precio, cuota3, cuota6, cuota12) {
        this.nombre = nombre
        this.precio=precio
        this.cuota3 = cuota3
        this.cuota6 = cuota6
        this.cuota12 = cuota12
    }
}

const heladera = new Producto('heladera',60000, 20000, 10000, 5000)
const television = new Producto('television',30000, 10000, 5000, 3600)
const cocina = new Producto('cocina',65000, 21600, 10800, 5500)
const lavarropas = new Producto('lavarropas',70000, 23300, 11600, 5800)

let elegirProducto = parseInt(prompt('elegir que producto desea comprar: 1.heladera // 2.television // 3.cocina // 4.lavarropas'))

let productoSeleccionado = false
let infoProducto

while (productoSeleccionado === false) {
    if (elegirProducto === 1) {
        productoSeleccionado = true
        infoProducto = heladera
        alert('su producto seleccionado es heladera y tiene un valor de 60000')
    } else if (elegirProducto === 2) {
        productoSeleccionado = true
        infoProducto = television
        alert('su producto seleccionado es television y tiene un valor de 30000')
    } else if (elegirProducto === 3) {
        productoSeleccionado = true
        infoProducto = cocina
        alert('su producto seleccionado es cocina y tiene un valor de 65000')
    } else if (elegirProducto === 4) {
        productoSeleccionado = true
        infoProducto = lavarropas
        alert('su producto seleccionado es lavarropas y tiene un valor de 70000')
    } else{
        productoSeleccionado =
        parseInt(prompt( 'Debes selecccionar un producto en cartilla, 1.heladera- 2.television- 3.cocina- 4.lavarropas'))
    }
}
const cuotaSeleccionada= parseInt(prompt('En cuantas cuotas desea pagar su producto? 3. 6. 12.'))

if(cuotaSeleccionada===3){
    alert( `los valores en cuotas de ${infoProducto.nombre} son: 1. ${infoProducto.cuota3} a pagar en 3 meses`)
}else if( cuotaSeleccionada===6){
    alert( `los valores en cuotas de ${infoProducto.nombre} son:  ${infoProducto.cuota6} a pagar en 6 meses`)
}
else if( cuotaSeleccionada===12){
    alert( `los valores en cuotas de ${infoProducto.nombre} son:  ${infoProducto.cuota12} a pagar en 12 meses`)
}












//TODO LO COMENTADO ABAJO ES PARA MI // PRUEBA Y ERROR


//alert( `los valores en cuotas de ${infoProducto.nombre} son: 1. ${infoProducto.cuota3} a pagar en 3 meses- 2. ${infoProducto.cuota6} a pagar en 6 meses- 3. ${infoProducto.cuota12} a pagar en 12 meses`)



//let valor
//if(cuotaSeleccionada ===3 ){
//    valor= productoSeleccionado.precio / 3
//    alert('el precio a pagar en 3 meses es:' +valor)
//} else if (cuotaSeleccionada===6){
//    valor=productoSeleccionado.precio/6
//    alert('el precio a pagar en 6 meses es:' +valor)
//}else if(cuotaSeleccionada===12){
//    valor=productoSeleccionado.precio/12
//    alert('el precio a pagar en 12 meses es:' +valor)
//}else{
 //   alert(
 //       parseInt(prompt('Elija cuotas que desea pagar su producto? 3. 6. 12.'))
 //   )
//}

//const cuota3= calculoDeCuota( cuotaSeleccionada, infoProducto.precio,3)
//const cuota6= calculoDeCuota( cuotaSeleccionada, infoProducto.precio,6)
//const cuota12= calculoDeCuota( cuotaSeleccionada, infoProducto.precio,12)

//function calculoDeCuota (precio,cuotas){
  //  const valor= precio/cuotaSeleccionada
//}