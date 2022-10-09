addEventListener ("DOMContentLoaded", ()=>{
    //19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5 puntos.

    //19 CUATRO EXAMENES
    //Datos de entrada
    let a=Number(prompt("ingrese la calificacion 1: "));
    let b=Number(prompt("ingrese la calificacion 2: "));
    let c=Number(prompt("ingrese la calificacion 3: "));
    let d=Number(prompt("ingrese la calificacion 4: "));
    
    //Procesos
    let Promedio=(a+b+c+d)/4
    //condicion
    if (Promedio>=5);
      console.log("aprobado");
    if (promedio<5);
      console.log("reprobado");
})