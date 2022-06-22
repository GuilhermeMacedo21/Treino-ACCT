var exib = document.getElementById("exib")
var isExclude = false;

function digitar(dig){
    if(isExclude){
        reset();
        isExclude= false;
    }
    exib.innerHTML += dig;
}
function reset(){
    exib.innerHTML = "";
}
function calc(){
    isExclude = true;
    let expression = document.getElementById("exib").innerHTML;
    console.log(expression);
    exib.innerHTML = eval(expression);
}