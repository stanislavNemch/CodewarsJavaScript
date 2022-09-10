
// var summation = function (num) {
//     let i = 1;
//     let sum = 0;
//     while(i <= num){
//         sum += i;
//         i++;
//     }
//     return sum;
// }
//
// document.write(summation(8));

//Камень ножницы бумага, игра
// const rps = (p1, p2) => {
//     if((p1 === "scissors" && p2 === "paper") || (p1 === 'rock' && p2 === 'scissors') ||
//         (p1 === 'paper' && p2 === 'rock')) {
//         return 'Player 1 won!';
//     } if((p1 === "scissors" && p2 === 'rock') || (p1 === 'paper' && p2 === 'scissors') ||
//         (p1 === 'rock' && p2 === 'paper')) {
//         return 'Player 2 won!';
//     } if((p1 === 'rock' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'scissors') ||
//         (p1 === 'paper' && p2 === 'paper')) {
//         return 'Draw!';
//     }
// };
//
// rps('paper', 'paper');

// var min = function(list){
//
//     if (list.length !== 1){
//         for (let i = 0; i < list.length; i++) {
//             if (list[i] < list[0]){
//                 list[0] = list[i];
//             }
//         }
//         return list[0];
//     } else {
//         return list[0];
//     }
// }
//
// var max = function(list){
//
//     if (list.length !== 1){
//         for (let i = 0; i < list.length; i++) {
//             if (list[i] > list[0]){
//                 list[0] = list[i];
//             }
//         }
//         return list[0];
//     } else {
//         return list[0];
//     }
// }
//
// document.write(min([5, 25, 36, -2, -56, 96, 369]));
// // document.write(min([5]));
// document.write(max([5, 25, 36, -2, -56, 96, 369]));
// document.write(max([5]));

// function check(a, x) {
//
//     let result = false;
//
//     for (let i = 0; i < a.length; i++) {
//         if (x === a[i]){
//             result = true;
//         }
//     }
//     return result;
// }
//
// document.write(check([66, 101], 66));
// document.write('<hr>');
// document.write(check([101, 45, 75, 105, 99, 107], 107));
// document.write('<hr>');
// document.write(check(['t', 'e', 's', 't'], 'e'));
// document.write('<hr>');
// document.write(check(['what', 'a', 'great', 'kata'], 'kat'));
// document.write('<hr>');

// function sum (numbers) {
//     let sum = 0;
//     if (numbers.length !== 0) {
//         for (let i = 0; i < numbers.length; i++) {
//             sum += numbers[i];
//         }
//         return sum;
//     } else {
//         return sum;
//     }
// }
//
// document.write(sum([]));
// document.write('<hr>');
// document.write(sum([1, 5.2, 4, 0, -1]));
// document.write('<hr>');

// function doubleInteger(i) {
//     i = i*2;
//     return i;
// }

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (mpg * fuelLeft >= distanceToPump){
//         return true;
//     } else {
//         return false;
//     }
// };
//
// document.write(zeroFuel(100,50,1));

// function countPositivesSumNegatives(input) {
//     let count = 0;
//     let sum = 0;
//     if (Number(input) !== 0) {
//     if (input.length !== 0) {
//             for (let i = 0; i < input.length; i++) {
//                 if (input[i] > 0) {
//                     count += 1;
//                 } else {
//                     sum += input[i];
//                 }
//             }
//             return [count, sum];
//         } else return input = [];
//     } else return input = [];
// }
//
//
// console.log(countPositivesSumNegatives(null));

// function sumMix(x){
//     let sum = 0;
//
//     for (let i = 0; i < x.length; i++) {
//         sum += Number(x[i]);
//     }
//
//     return sum;
// }

// let array = [];
// let i = 0;
// let n;
//
// do {
//     n = +prompt("Введіть кількість зірочок");
//
//     array[i] = n;
//
//     ++i;
//
//     console.log(array[i]);
// } while (n !== 0);
