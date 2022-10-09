addEventListener ("DOMContentLoaded", ()=>{
    //17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el tiempo y de un producto a otro, este dato se lee por teclado.

    //17 VALOR DEL COSTO DEL PRODUCTO
    //Datos de entrada
    console.log("ingrese el nombre del primer producto:")
    let p1=prompt()
    let p1v=Number(prompt("valor del producto:"))
    
    console.log("ingrese el nombre del segundo  producto:")
    let p2=prompt()
    let p2v=fl=Number(prompt("valor del producto:"))
    
    
    //procesos
    let Subttl = p1v+p2v
    let iva=Number(Subttl*0.19)
    let total=Number(Subttl + iva)
    //salidas o entrega de resultados
    console.log("el subtotal fue",Subttl)
    console.log("El iva fue",iva)
    console.log("El total a pagar con iva fue",total)
})
