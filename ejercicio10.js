addEventListener ("DOMContentLoaded", ()=>{
    //10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +b * x + c, siendo X un valor constante.
    //A*X**2+b*x+c siendo x un valor constante
    //from math import sqrt 
    let a=number(prompt(`ingrese el valor de (a):/n`));
    let b=number(prompt(`ingrese el valor de (b):/n`));
    let c=number(prompt(`ingrese el valor de (c):/n`));
    let x=number(23);
    //procesos
    let pr=(b**2-4 *a*c);
    if (pr<0);
        console.log(`raiz imaginaria`);
    
        let x1=(-b+sqrt(b**2-(4*a*c)))/(2*a)
        let x2=(-b-sqrt(b**2-(4*a*c)))/(2*a)
    
      console.log(` el valor de x1(raiz positiva)es igual a:`,x1)
      console.log(` el valor de x2(raiz negativa) es igual a:`,x2)
    
                                                                                                                                                                                                                                                                                                                                                                                  
    //salida o entrega de resultados
      console.log(`el resultado re la raiz`)
})