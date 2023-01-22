const currentScreen=document.getElementById("currentScreen");
const numberButtons=document.querySelectorAll(".number");
const lastOperation=document.getElementById("lastOperation");
const alloperators= document.querySelectorAll(".operator");
document.getElementById("equals").addEventListener('click',evaluate);
document.getElementById("clear").addEventListener('click',reset);
document.getElementById("delete").addEventListener('click',deletefunc);

function operate(operator,num1,num2) {
    num1=Number(num1)
    num2=Number(num2)
    lastOperation.textContent+= "="
    switch(operator) {
        case '+':
            return num1+num2
        case '-':
            return num1-num2 
        case 'x':
            return num1*num2
        case '÷':
            return num1/num2
        default:
             return null      
        }
    }


numberButtons.forEach((button) => 
    button.addEventListener('click', () => 
    currentScreen.textContent+=button.textContent)
)


alloperators.forEach((button) => 
    button.addEventListener('click', () => {
    if (currentScreen.innerHTML) {
    lastOperation.textContent=currentScreen.textContent+button.textContent;
    currentScreen.innerHTML="";}
    else {
      lastOperation.innerHTML=""
      currentScreen.innerHTML="You have to enter data"
    }}
    ))

function evaluate() {
    if (lastOperation.textContent) {
    let lastOperationText=lastOperation.textContent;
    let firstnum = Number(lastOperationText.slice(0, lastOperationText.length - 1));
    let secondnum = Number(currentScreen.textContent);
    lastOperation.textContent+=currentScreen.textContent;
    currentScreen.innerHTML =""
    let operator =lastOperationText.slice(-1);
        currentScreen.innerHTML 
    let result=operate(operator,firstnum,secondnum);
    currentScreen.textContent=result;}
    else {
       lastOperation.innerHTML=""
       currentScreen.innerHTML="You have to enter data"
    }
}

function reset() {
    currentScreen.innerHTML ="";
    lastOperation.innerHTML ="";
}

function deletefunc() {
    currentScreen.textContent=currentScreen.textContent.slice(0, currentScreen.textContent.length - 1);
}
