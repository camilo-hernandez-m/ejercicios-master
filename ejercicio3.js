addEventListener("DOMContentLoaded", ()=>{
    // 3. Un programa que lea 4 números y 2calcule la media. 
    // Media= (num1 + num2 + num3 + num4)/4 

    let num1 = Number(prompt("Ingrese el numero 1", 1));
    let num2 = Number(prompt("Ingrese el numero 2", 2));
    let num3 = Number(prompt("Ingrese el numero 3", 3));
    let num4 = Number(prompt("Ingrese el numero 4", 4));
    let Media = (num1 + num2 + num3 + num4)/4 ;
    console.log(`%cFormula (${num1} + ${num2} + ${num3} + ${num4}) / 4`);
    console.log(`El promedio es : "${Media}"`);

})