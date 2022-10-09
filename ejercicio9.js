addEventListener ("DOMContentLoaded", ()=>{
    //Escribir un programa que calcule el área y el volumen de un cilindro:A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)V = (PI * r2) * h
    //Datos de entrada
    let num1=number(prompt(`ingrese el numero`,2));
    let num2=number(prompt(`ingrese el numero`,3.14));
    let num3=number(prompt(`ingrese el numero`,4));
    let num4=number(prompt(`ingrese el numero`,6));
    //procesos y operaciones
    let Area=(num1*(num2*num3**2))+((num1*num2*num3)*num4);
    let Volumen=(num2*num3**2)*num4;
    //salida y entrega de resultados
    console.log("AREA DE CILINDRO",Area);
    console.log("VOLUMEN DE CILINDRO",Volumen);
})