addEventListener ("DOMContentLoaded", ()=>{
    //16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación secompone de los siguientes porcentajes: 55% del promedio final de sus calificaciones de los tres(3) parciales. 30% de la calificación examen final y 15% de la calificación trabajo final.

    //16 FINAL DE LA MATERIA DE ALGORITMOS
    // datos de entrada
    let a=Number(prompt("ingrese la calificacion 1: "))
    let b=Number(prompt("ingrese la calificacion 2: "))
    let c=Number(prompt("ingrese la calificacion 3: "))
    //Number=todo aquel que pide un numero y prompt=pedir que ingrese algo
    //procesos y operaciones
    
    let promedio=(a+b+c)/3
    let examen=Number(prompt("Ingrese el promedio del examen final: "))
    let trabajo=Number(prompt("Ingrese la calificacion del trabajo final: "));
    
    let final= (promedio*.55)+(examen*.30)+(trabajo*.15);
    
    //entrega de resultados 
    console.log("el promedio final de la materia de algoritmos es: ",round(final,1));
})