var result = document.getElementById("result")
var isExclude = false;

function insert(digit){
    if(isExclude){
        reset();
        isExclude= false;
    }
    result.innerHTML += digit;
}
function reset(){
    result.innerHTML = "";
}
function calculate(){
    isExclude = true;
    let expression = result.innerHTML;
    console.log(expression);
    result.innerHTML = eval(expression);
}