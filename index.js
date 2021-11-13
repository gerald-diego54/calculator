
"use strict";
var number = document.querySelectorAll('.btn-row #button');
var operation = document.querySelectorAll('.btn-row #operation');
var input = document.getElementById('input');
var result_displayed = false;
var output = document.getElementById('output');
var evaluate = document.getElementById('result');
var test_operators = ["+", "-", "×", "÷"];
var clear = document.getElementById('clear-all');
var del = document.getElementById('delete');
console.log(test_operators[0], test_operators[1], test_operators[2], test_operators[3]);
console.log(number);
console.log(operation);
console.log(input);
console.log(result);
console.log(output);
console.log(evaluate);
console.log(test_operators);
for (let index = 0; index < number.length; index++) { //number.length = 3
    number[index].addEventListener('click', function(e){ //number = num btn // number[0]-->
        var num_str = input.innerHTML,
        last_num_str = num_str[num_str.length - 1];
        if(result_displayed === false){
            input.innerHTML = input.innerHTML + e.target.innerHTML;
        }
        else if(result_displayed === false && last_num_str === test_operators[0] || last_num_str === test_operators[1] || last_num_str === test_operators[2] || last_num_str === test_operators[3]){
            result_displayed = false;
            input.innerHTML = input.innerHTML + e.target.innerHTML;
        }
        else{
            result_displayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}
for (let index = 0; index < operation.length; index++) { //number.length = 3
    operation[index].addEventListener('click', function(e){ //number = num btn // number[0]-->
        var num_str = input.innerHTML,
        last_num_str = num_str[num_str.length - 1];
        if(last_num_str === test_operators[0] || last_num_str === test_operators[1] || last_num_str === test_operators[2] || last_num_str === test_operators[3]){
            var new_str = num_str[num_str.length - 1];
            input.innerHTML = new_str;
        }
        else if(num_str.length == 0){
            output.innerHTML = "No value";
        }
        else{
            input.innerHTML += e.target.innerHTML;
        }
    });
}
evaluate.addEventListener("click", function(){
    var input_str = input.innerHTML;
    var numbers = input_str.split(/\+|\-|\×|\÷/g);
    var operators = input_str.replace(/[0-9]|\./g, "").split("");
    console.log(numbers);
    console.log(operators);
    var divide = operators.indexOf("÷");
    var multiply = operators.indexOf("×");
    var subtract = operators.indexOf("-");
    var add = operators.indexOf("+");

    while(divide != -1){
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }
    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
    output.innerHTML = numbers[0];
    result_displayed = true;
});
clear.addEventListener("click", function() {
    input.innerHTML = "";
    output.innerHTML = "";
  });

del.addEventListener("click", function(){
    input.innerHTML = input.innerHTML.slice(0, -1);
});