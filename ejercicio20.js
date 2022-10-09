addEventListener ("DOMContentLoaded", ()=>{
    //20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total sueldo del vendedor?.

    //20 SUELDO BASE MAS 10% DE COMISION
    //Datos de entrada
    let sueldo=Number(prompt("ingresa el sueldo: "));
    let a=Number(prompt("Ingresa la venta1: "));
    let b=Number(prompt("Ingresa la venta2: "));
    let c=Number(prompt("Ingresa la venta3: "));
    //proceso
    
    let comision=(a+b+c)*.10
    
    //salida o entrega de datos
    console.log("El sueldo del trabajador es: $ ",sueldo);
    console.log("la comisison del mes por las tres ventas es: $ ",comision);
    console.log("el sueldo total con comision es: $ ",sueldo+comision);
})