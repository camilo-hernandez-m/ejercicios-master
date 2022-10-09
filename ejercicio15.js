addEventListener ("DOMContentLoaded", ()=>{
    //15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

    //15 DE GRADOS CENTIGRADOS A GRADOS FAHRENHEIT
    //datos de entrada
    // F= (9/5)*c+32
    //procesos y operaciones
    let c=number(prompt("ingrese la cantidad de grados celcius que desee convertir: "))
    let f= 9/5*c+32
    console.log(c,"la cantidad de grados celcius equivale a",f,"grados fahrenheit");
})