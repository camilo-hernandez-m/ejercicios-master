addEventListener ("DOMContentLoaded", ()=>{
    //14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que ingresando el costo de los medicamentos calcules el descuento y el precio final.

    //14 FARMACIA
    //datos de entrada
    let preciOrg=number(("ingrese el calor del medicamento:"));
    let descuento=0.1
    // procesos y operaciones
    let valorproduct=number((preciOrg*descuento));
    let valorfinal=number((preciOrg-valorproduct));
    
    //datos para ingresar y de salida
    console.log("ingrese el valor del medicamento: ",valorfinal); 
})
