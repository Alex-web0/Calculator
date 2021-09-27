//make it a function
var list = [];
function calc(fr){

   var x = document.querySelectorAll(".number")[fr-1].textContent;
   console.log(x);
   x = parseInt(x);
   list.push(x);
    document.querySelector("#insert").textContent = list[(list.length-1)];
   console.log(list)
}
function clear(){
    document.querySelector("#insert").textContent = '0000';
    list = [];
    console.log('doen')
}
function equal(){
    var stringo = list
    stringo = (stringo)
     console.log(stringo)
}

function operating(op){
    
    
    }
function makeWhite(){
    document.querySelector(".fas").classList.toggle("t-l");
    document.querySelector("body").classList.toggle("b-d");
    document.querySelector(".cal").classList.toggle("b-l");
    document.querySelector(".cal").classList.toggle("t-l");
    document.querySelector(".screen").classList.toggle("b-d");
    //document.querySelector(".wood").classList.toggle("b-l");
    for(var i = 0; i < 16;i++){
    document.querySelectorAll(".circle")[i].classList.toggle("b-d");
    }
}
