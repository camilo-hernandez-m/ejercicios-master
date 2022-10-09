addEventListener("DOMContentLoaded", ()=>{
    //Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar el resultado en metros/segundo. Velocidad = espacio/tiempo.
    let mets=2*1000
    let segs=60*5
    let tiempo=5
    let ms=mets/segs
    let v=mets/tiempo
    console.log("metros/segundos:",ms);
    console.log("velocidad:",v);
})