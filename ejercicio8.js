addEventListener ("DOMContentLoaded", ()=>{
    //Escribir un programa que evalúe la siguiente expresión: (a+7*c)/(b+2-a)+2*b
    let numA=Number (prompt(`ingrese el numero`,10));
    let numB=Number (prompt(`ingrese el numero`,12));
    let numC=Number (prompt(`ingrese el numero`,15));
    let num1=Number (prompt(`ingrese el numero`,2));
    let num2=Number (prompt(`ingrese el numero`,7));
    
    let total=(numA+num1*numC)/(numB+num2-numA)+num2*numB
    
    //salida o entrega de resultados
    
    console.log("VALOR DE LA EXPRESION ",`${total}`);



})


