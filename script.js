function doCalculation(operator) {
    let num1 = +document.querySelector('#num1').value;
    let num2 = +document.querySelector('#num2').value;
    let result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else if (operator === 'e/o') {
        let num = num1 % 2 ;
        if(num === 1) {
            result = "It's an Odd Number"
        }else {
            result = "It's an Even Number"
        }
    }
    document.querySelector('#result').innerHTML = result;
}




























// let num1 = +document.querySelector('#num1').value;
// let num2 = +document.querySelector('#num2').value;
// let result = 0;
// function add() {
//     let num1 = +document.querySelector('#num1').value;
//     let num2 = +document.querySelector('#num2').value;
//     let result = 0;
//     result = num1 + num2;
//     document.querySelector('#result').innerHTML = result;
// }
// function sub() {
//     let num1 = +document.querySelector('#num1').value;
//     let num2 = +document.querySelector('#num2').value;
//     let result = 0;
//     result = num1 - num2;
//     document.querySelector('#result').innerHTML = result;
// }
// function mul() {
//     let num1 = +document.querySelector('#num1').value;
//     let num2 = +document.querySelector('#num2').value;
//     let result = 0;
//     result = num1 * num2;
//     document.querySelector('#result').innerHTML = result;
// }
// function div() {
//     let num1 = +document.querySelector('#num1').value;
//     let num2 = +document.querySelector('#num2').value;
//     let result = 0;
//     result = num1 / num2;
//     document.querySelector('#result').innerHTML = result;
// }
// function mod() {
//     let num1 = +document.querySelector('#num1').value;
//     let num2 = +document.querySelector('#num2').value;
//     let result = 0;
//     result = num1 % num2;
//     document.querySelector('#result').innerHTML = result;
// }


// let num1 = +document. querySelector('num1').value;
// let num2 = +document. querySelector('num2').value;
// let result = 0;
// function add(){
//     result = num1 + num2 ;
//     document.querySelector('result').innerHTML = result ;
// }
// function sub(){
//     result = num1 - num2 ;
//     document.querySelector('result').innerHTML = result ;
// }
// function mul(){
//     result = num1 * num2 ;
//     document.querySelector('result').innerHTML = result ;
// }
// function div(){
//     result = num1 / num2 ;
//     document.querySelector('result').innerHTML = result ;
// }
// function mod(){
//     result = num1 % num2 ;
//     document.querySelector('result').innerHTML = result ;
// }