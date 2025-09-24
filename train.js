
//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// DEFINE
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng bolmaydi", null);
  } else {
    const c = a % b;
    callback(null, c, true);
  }
}

// CALL
qoldiqliBolish(7, 4, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("data:", data);
    console.log("MATIQLAR ...");
  }
});



// function countLetter(letter, word) {
//   let count = 0;
//   for (let char of word) {
//     if (char === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter("i", "Alii")); // 2
// console.log(countLetter("r", "Jasurrrr")); // 4
// console.log(countLetter("T", "MIT")); // 1





// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0–20
//   "togri boshliq tanlang va koproq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];


// // callback function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function(){
//     callback(null, list[5]);
//     }, 5000);
//   }
// }
//  console.log('passed here 0');
// maslahatBering(70, (err, data) => {
//   if (err) console.log('ERROR:', err);
//   else{
//   console.log('javob:', data);
//   }
// });
// console.log("passed here 1");






// Async function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return (list[0]);
//   else if (a > 20 && a <= 30) return(null, list[1]);
//   else if (a > 30 && a <= 40) return(null, list[2]);
//   else if (a > 40 && a <= 50) return(null, list[3]);
//   else if (a > 50 && a <= 60) return(null, list[4]);
//   else {
//     return new Promise((resolve, reject) =>{
//         setInterval(function(){
//         // setTimeout(function(){
//         resolve(list[5]);
//     }, 1000);
//   })
//  }
// }

//  console.log('passed here 0')
// maslahatBering(75)
//   .then((data) => {
//     console.log("javob:", data);    
// })
//   .catch((err) => {
//     console.log("Error", err);
//   })
// console.log("passed here 1")


// async function run () {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(70);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob);
// }
// run();















// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0–20
//   "togri boshliq tanlang va koproq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function(){
//     callback(null, list[5]);
//     }, 5000);
//   }
// }
//  console.log('passed here 0')
// maslahatBering(61, (err, data) => {
//   if (err) console.log('ERROR:', err);
//   else{
//   console.log('javob:', data);
//   }
// });
// console.log("passed here 1")
