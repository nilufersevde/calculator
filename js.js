function operate(operator,num1,num2) {
    num1=Number(num1)
    num2=Number(num2)
    switch(operator) {
        case '+':
            return num1+num2
        case '-':
            return num1-num2 
        case '*':
            return num1*num2
        case '/':
            return num1/num2
        default:
             return null      
        }
    }



//evaluates the result when click to the equals button
document.getElementsByClassName("equal").addEventListener('click',evaluate)
function evaluate {
    let firstnum=
    let secondnum=
    let operator=
    operate(operator,firstnum,secondnum)
}

function calloperator(operator) {

}





//displaying the content of clisked buttons on the screen 
const currentScreen=document.getElementById("currentScreen");
const numberButtons=document.querySelectorAll(".number");
numberButtons.forEach((button) => 
    button.addEventListener('click', () => 
    currentScreen.textContent+=button.textContent)
)






