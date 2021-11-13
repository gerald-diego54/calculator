"use strict";
var result = document.getElementById("input");

var cal = function(number){
    result.value += number;
}
var compute = function(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        result.value = "Syntax Error";
    }
}
var clear_all = function(){
    result.value = null;
}