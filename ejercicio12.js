addEventListener ("DOMContentLoaded", ()=>{
    //12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA de 20%.

    //12 LLAMADA TELEFONICA
    //Datos de entrada
    let dr=("duracion de la llamada :")
    let min=355
    let iva=0.20
    //procesos y operaciones
    let rest=((dr*min)*iva)
    let sum=rest+(dr*min)
    //salida y entrega de resultados
    console.log("valor de llamada:",sum)
})