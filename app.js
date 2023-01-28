

var tez = [85, 75, 95, 152];
function kir(x) {
   var sum = 0;
   for (var sp of tez) {
      sum += sp*2;
      if (sp > 150 && sp <=180) {
         console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
      }
      if (sp > 100 && sp <=150) {
         console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
      }
      if (sp >= 81 && sp <=100) {
         console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
      }
      if (sp > 70 && sp <=80) {
         console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
      }

     
   }
   return sum;
}

var a= console.log(`Umumiy summa ${kir(tez)} ming so'm` );


// var a = prompt("Codeni kiriting","0");
// var b = prompt("Massani kiriting","0");



// console.log("Umumiy summa: " + i);

// else{
//     console.log("Error")
// }


// else{
//     console.log("Error")
// }


// var a = prompt("Nec tezlikda ha  pulingiz bor?");
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