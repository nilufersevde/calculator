
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

//displaying the content of clisked buttons on the screen 
const currentScreen=document.getElementById("currentScreen");
const numberButtons=document.querySelectorAll(".number");
numberButtons.forEach((button) => 
    button.addEventListener('click', () => 
    currentScreen.textContent+=button.textContent)
)

const lastOperation=document.getElementById("lastOperation");
const alloperators= document.querySelectorAll(".operator");
alloperators.forEach((button) => 
    button.addEventListener('click', () => {
    lastOperation.textContent=currentScreen.textContent+button.textContent;
    currentScreen.innerHTML="";}
    ))

//evaluates the result when click to the equals button
document.getElementById("equals").addEventListener('click',evaluate);
function evaluate() {
    let lastOperationText=lastOperation.textContent;
    let firstnum = Number(lastOperationText.slice(0, lastOperationText.length - 1));
    let secondnum = Number(currentScreen.textContent);
    lastOperation.textContent+=currentScreen.textContent;
    currentScreen.innerHTML =""
    let operator =lastOperationText.slice(-1);
        currentScreen.innerHTML 
    let result=operate(operator,firstnum,secondnum);
    currentScreen.textContent=result;
}

document.getElementById("clear").addEventListener('click',reset);
function reset() {
    currentScreen.innerHTML ="";
    lastOperation.innerHTML ="";
}

document.getElementById("delete").addEventListener('click',deletefunc);
function deletefunc() {
    currentScreen.textContent=currentScreen.textContent.slice(0, currentScreen.textContent.length - 1);
}
