let numLineone=document.getElementsByClassName("numberLineFirst")[0];
let eqButt=document.querySelector("#eq");
let perc=document.querySelector("#perc");
let numbers=document.querySelectorAll("#num");
let action=document.querySelectorAll("#action");
let backspace=document.querySelector("#clear");
let clear=document.querySelector("#C");
let clearone = document.querySelector("#CE");
let sqrt = document.querySelector("#sqrt");
let delonone = document.querySelector("#delonone");
let plusminus = document.querySelector("#plusminus");
let open  = document.querySelector("#main");
let content = document.getElementById("content");
let currentAction = "";
let currentNumber = "";
let lastNumber="";
let firstNumber;
var bul = false;
var disp = false;


action.forEach(i=> i.addEventListener("click", (e)=>{actionPressed(e)}));
bul = false;
clear.addEventListener("click", ()=>{
lastNumber="c"
currentAction = "";
currentNumber = "";
firstNumber = "";
numLineone.innerHTML="";
})

function actionPressed(e){
    bul=false;
    if (currentAction=="") 
    {
        if (e.target.innerText=="-") 
        {
            if (currentNumber=="") 
            {
                currentNumber="-";
                numLineone.innerHTML="-";
                return;
            }    
                    else{ 
                   numLineone.innerHTML=numLineone.innerHTML+e.target.innerHTML;
                    currentAction=e.target.innerText;
                    firstNumber=currentNumber;
                    currentNumber=""; 
                    return;
                }
        }
        if (currentNumber=="") {
            return;
        }
        else{      
            numLineone.innerHTML=numLineone.innerHTML+e.target.innerHTML;
            currentAction=e.target.innerText;
            firstNumber=currentNumber;
            currentNumber=""; 
        }
 
    }
    else{
    }
}

numbers.forEach(i=> i.addEventListener("click", (e)=>{getNumber(e)}));

function getNumber(arg){

    if (arg == "get") {
        return(currentNumber);
    }
    if((currentNumber.indexOf(".")> -1) && arg.target.innerHTML=="."){
        return;
    }else{
        currentNumber=currentNumber+arg.target.innerHTML;
        numLineone.innerHTML=numLineone.innerHTML+arg.target.innerHTML;
    }
    
};

main.addEventListener("click", ()=>{
    if(disp==false){content.style.display = "none";disp=true;}else{content.style.display = "block"; disp=false;}
    
});

eqButt.addEventListener("click", ()=>{
    bul = true;
    switch (currentAction) {
        case "+": numLineone.innerHTML=Math.floor((Number(firstNumber)+Number(currentNumber))*1000)/1000; break;
        case "-": numLineone.innerHTML=Math.floor((Number(firstNumber)-Number(currentNumber))*1000)/1000; break;
        case "/":numLineone.innerHTML=Math.floor((Number(firstNumber)/Number(currentNumber))*1000)/1000;  break;
        case "*":numLineone.innerHTML=Math.floor((Number(firstNumber)*Number(currentNumber))*1000)/1000; break;
    }
    if (numLineone.innerHTML % 1 == 0) {
        numLineone.innerHTML = parseInt(numLineone.innerHTML);
    }
    currentNumber=numLineone.innerHTML;
    currentAction = "";
    firstNumber="";
});

clearone.addEventListener("click", ()=>{
    if(currentNumber=="" && firstNumber!==""){
        if(currentAction==""){
            firstNumber="";
            numLineone.innerHTML=currentNumber;
        }
        if(currentAction!==""){
            currentAction="";
            numLineone.innerHTML=firstNumber;
        }
    }
    if(currentNumber!=="" && firstNumber==""){
        currentNumber="";
        numLineone.innerHTML=currentNumber;
    }
    if(currentNumber!=="" && firstNumber!==""){
        currentNumber="";
        numLineone.innerHTML=firstNumber+currentAction;
    }
    
});
delonone.addEventListener("click", ()=>{
    if(currentNumber!==""){
        currentNumber = Math.floor((1/Number(currentNumber))*1000)/1000;
        if(firstNumber==null){numLineone.innerHTML = currentNumber;}
        else{
            numLineone.innerHTML= firstNumber+currentAction+currentNumber;}
    }   
});

perc.addEventListener("click", ()=>{
    if(currentNumber!==""){
        
        if(firstNumber==null){
            currentNumber = ""+Math.floor((Number(currentNumber)*0.01)*1000)/1000;
            numLineone.innerHTML = currentNumber;
        }
        if(currentAction=="+" || currentAction=="-"){
            currentNumber=Math.floor((Number(currentNumber)/100 * Number(firstNumber))*1000)/1000;
            numLineone.innerHTML= firstNumber+currentAction+currentNumber;}
        if(currentAction!=="+" || currentAction!=="-"){
            currentNumber = ""+Math.floor((Number(currentNumber)*0.01)*1000)/1000;
            numLineone.innerHTML= firstNumber+currentAction+currentNumber;}
    }   
});

sqrt.addEventListener("click", ()=>{
    if(currentNumber!==""){
        currentNumber= Math.pow(currentNumber, 2);
        if(firstNumber==null){numLineone.innerHTML = currentNumber;}
        else{
            numLineone.innerHTML = firstNumber+currentAction+currentNumber;
        }
    }    
});

backspace.addEventListener("click", ()=>{
    if(currentAction=="" && bul==false ){
        if(firstNumber==null){
        currentNumber = currentNumber.slice(0,-1);
        numLineone.innerHTML = currentNumber;
        }else{
            currentNumber=firstNumber.slice(0,-1);
            firstNumber="";
            numLineone.innerHTML = currentNumber;
        }
    }
    if(currentAction!=="" && bul==false && currentNumber==""){
        currentNumber=firstNumber;
        numLineone.innerHTML = currentNumber;
        currentAction="";
    }
    if(currentAction!=="" && bul==false && currentNumber!==""){
        currentNumber=currentNumber.slice(0,-1);
        numLineone.innerHTML = firstNumber+currentAction+currentNumber;
    }
    if(bul){
        currentNumber=currentNumber.slice(0,-1)
        numLineone.innerHTML=currentNumber;
    }
});
plusminus.addEventListener("click", ()=>{
    if(currentNumber!==""){
        currentNumber= 0-Number(currentNumber);
        if(firstNumber==null){numLineone.innerHTML = currentNumber;}
        else{
            if(Number(currentNumber)<0){
                numLineone.innerHTML = firstNumber+currentAction+"("+currentNumber+")";
            }else{
                numLineone.innerHTML = firstNumber+currentAction+currentNumber;
            }
            
        }
    }    
});