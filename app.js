let weight=document.querySelector('#weight');
let height=document.querySelector('#height');
var shkala=document.querySelector('.shkala');
var ok = document.querySelector('.men');
document.querySelector("#sumbit").addEventListener("click",()=> {
   document.querySelector("body").classList.toggle("dakr-mode")


function bmi(){
      let kg = weight.value*1;
      let sm = height.value*1/100;
      let sum = kg / (sm*sm);
      if (sum < 16) {
         ok.textContent =`"Siz o'ta ozg'nsiz. Siz davolanishingiz kerak yoki semirishni davom eting!. BMI ${Math.floor(sum*100)/100}"` ;
         shkala.style.backgroundColor = 'rgb(228, 155, 42)';
          }
      if (sum >=16.1 && sum <=17) {
         ok.textContent =`Siz o'rtacha ozg'insiz. Siz semirishingiz  kerak!. BMI ${Math.floor(sum*100)/100}` ;
         shkala.style.backgroundColor = '#73a453';

          }
      if (sum >= 17.1 && sum <=18.5) {
         ok.textContent =`Siz ozgina semirishingiz kerak. BMI ${Math.floor(sum*100)/100}`;
         shkala.style.backgroundColor = '#53a01f';

          }
      if (sum > 18.5 && sum <=25) {
         ok.textContent = `Siz sog'lomsiz. Shunday davom eting!  BMI ${Math.floor(sum*100)/100}` ;
         shkala.style.backgroundColor = 'green';

          }
      if (sum > 25 && sum <=30) {
         ok.textContent =`"Siz ortiqcha semizsiz. Shuning uchun siz to'gri ovqatlaniishingiz va shu bilan birgalikda sport bilan shug'ullanishingiz kerek!  BMI ${Math.floor(sum*100)/100}"`;
         shkala.style.backgroundColor = '#80a01f';

          }
      if (sum > 30 && sum <=35) {
         ok.textContent =`"Siz Obzes I kassaligiga chalingansiz. Shuning uchun siz to'gri ovqatlaniishingiz va shu bilan birgalikda sport bilan shug'ullanishingiz kerek! BMI ${Math.floor(sum*100)/100}"`;
         shkala.style.backgroundColor = '#95a01f';

          }
      if (sum > 35 && sum <=40) {
         ok.textContent = `"Siz Obzes II kassaligiga chalingansiz. Shuning uchun davolanishingiz kerak." BMI ${Math.floor(sum*100)/100}`;
         shkala.style.backgroundColor = '#a0281f';
          }
      if (sum > 40) {
         ok.textContent = `"Siz Obzes III kassaligiga chalingansiz. Shuning uchun davolanishingiz kerak."BMI ${Math.floor(sum*100)/100}`;
         shkala.style.backgroundColor = 'red';
          }
    shkala.style.height=sum*300/40+'px';
    
}
bmi();

})
// var tez = [85, 75, 95, 152];
// function kir(x) {
//    var sum = 0;
//    for (var sp of tez) {
//       sum += sp*2;
//       if (sp > 150 && sp <=180) {
//          console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
//       }
//       if (sp > 100 && sp <=150) {
//          console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
//       }
//       if (sp >= 81 && sp <=100) {
//          console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
//       }
//       if (sp > 70 && sp <=80) {
//          console.log(`Siz ${sp} tezlikda  yurganingiz uchun jarima ${sp*2} ming so'm `);
//       }

     
//    }
//    return sum;
// }

// var a= console.log(`Umumiy summa ${kir(tez)} ming so'm` );


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