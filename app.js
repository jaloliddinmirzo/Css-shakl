
 
var kartoshka = {
    code :50,
    price : 5000,
    title : "Kartoshka",
 };
 var piyoz = {
    code :40,
    price : 7000,
    title : "Piyoz",
 };
 var sabzi = {
    code :60,
    price : 4000,
    title : "Sabzi",
 };
 var i=0;
 function kir (cod,massa){


    function colc(kod){
    if ( kod.code == cod){
        var k = kod.price * massa; 
        console.log(kod.title+" "+" 1kg " + kod.price); 
        console.log(kod.title+" "+" codesi " + kod.code); 
        console.log(kod.title+" "+" Massasi " + massa); 
        console.log("Sum: " + k);
        i +=k;
        }
}

colc(kartoshka);
colc(piyoz);
colc(sabzi);
}

// var a = prompt("Codeni kiriting","0");
// var b = prompt("Massani kiriting","0");

kir(50,6);
kir(40,9);
kir(60,2);


console.log("Umumiy summa: " +i);

// else{
//     console.log("Error")
// }


// else{
//     console.log("Error")
// }


// var a = prompt("Necha  pulingiz bor?");
// // var b = prompt("Massani kiriting");


// function kir (cod){
//    if (cod > 10000){
//       console.log("Gavaya");
//    }
//    if (cod <= 5000){
//       console.log("Dubay");
//    }
//    if (cod <= 1000){
//       console.log("Turkiya");
//    }
//    if (cod <= 500){
//       console.log("Gavaya");
//    }
// }
// kir(a)