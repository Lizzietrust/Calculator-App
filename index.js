const switchOne = document.getElementById("switch-one");
const switchTwo = document.getElementById("switch-two");
const switchThree = document.getElementById("switch-three");
const body = document.querySelector("body");
const calcBody = document.getElementById("calc-body");
const screen = document.getElementById("screen");
const calc = document.querySelector(".calc");
const theme = document.querySelector(".themep");
const themeNo = document.getElementById("theme-no");
const themeBtn = document.getElementById("theme-btn");
const del = document.getElementById("del");
const resetKey = document.getElementById("reset");
const equalKey = document.getElementById("equal");
const keyBtns = document.querySelectorAll("button");


switchOne.addEventListener('click', themeTwo);
switchTwo.addEventListener('click', themeThree);
switchThree.addEventListener('click', themeOne);

function themeTwo () {
    switchOne.style.opacity = 0;
    switchThree.style.opacity = 0;
    switchTwo.style.opacity = 1;
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    calcBody.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    switchTwo.style.backgroundColor = "hsl(25, 98%, 40%)";
    calc.style.color = "hsl(224, 36%, 15%)";
    theme.style.color = "hsl(224, 36%, 15%)";
    themeNo.style.color = "hsl(224, 36%, 15%)";
    themeBtn.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen.style.color = "hsl(224, 36%, 15%)";
    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetKey.style.backgroundColor = "hsl(185, 42%, 37%)";
    equalKey.style.backgroundColor = "hsl(25, 98%, 40%)";
}

function themeThree () {
    switchOne.style.opacity = 0;
    switchTwo.style.opacity = 0;
    switchThree.style.opacity = 1;
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    calcBody.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    switchThree.style.backgroundColor = "hsl(176, 100%, 44%)";
    calc.style.color = "hsl(52, 100%, 62%)";
    theme.style.color = "hsl(52, 100%, 62%)";
    themeNo.style.color = "hsl(52, 100%, 62%)";
    themeBtn.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.color = "hsl(52, 100%, 62%)";
    for (let i = 0; i < keyBtns.length; i++) {
        let keyButton = keyBtns[i];
        keyButton.style.backgroundColor = "hsl(268, 47%, 21%)"
        keyButton.style.color = "hsl(52, 100%, 62%)";
    }
    
    del.style.backgroundColor = "hsl(281, 89%, 26%)";
    del.style.color = "hsl(0, 0%, 100%)";
    resetKey.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetKey.style.color = "hsl(0, 0%, 100%)";
    equalKey.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalKey.style.color = "hsl(221, 14%, 31%)";
}

function themeOne () {
    switchOne.style.opacity = 1;
    switchTwo.style.opacity = 0;
    switchThree.style.opacity = 0;
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    calcBody.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    calc.style.color = "hsl(0, 0%, 100%)";
    theme.style.color = "hsl(0, 0%, 100%)";
    themeNo.style.color = "hsl(0, 0%, 100%)";
    themeBtn.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.color = "hsl(0, 0%, 100%)";
    for (let i = 0; i < keyBtns.length; i++) {
        let keyButton = keyBtns[i];
        keyButton.style.backgroundColor = "hsl(0, 40%, 100%)"
        keyButton.style.color = "hsl(221, 14%, 31%)";
    }
    del.style.backgroundColor = "hsl(222, 26%, 31%)";
    del.style.color = "hsl(0, 0%, 100%)"
    resetKey.style.backgroundColor = "hsl(222, 26%, 31%)";
    resetKey.style.color = "hsl(0, 0%, 100%)"
    equalKey.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalKey.style.color = "hsl(0, 0%, 100%)";
}


class Calculator {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber
        this.reset()
    }

    reset () {
        this.currentNum = ""
        this.previousNum = ""
        this.operator = undefined
    }

    delete () {
        this.currentNum = this.currentNum.toString().slice(0, -1)
    }

    appendNumber (number) {
        if (number === '.' && this.currentNum.includes('.')) return
        this.currentNum = this.currentNum.toString() + number.toString()
    }

    selectOperator (operator) {
        if(this.currentNum === "") return
        if(this.previousNum !== "") {
            this.compute()
        }
        this.operator = operator
        this.previousNum = this.currentNum
        this.currentNum = ""

    }

    compute () {
        let computation
        const prev = parseFloat(this.previousNum);
        const curr = parseFloat(this.currentNum);
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operator) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case 'x':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
            default:
                return    
        }
        this.currentNum = computation
        this.operator = undefined
        this.previousNum = ""
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
    }

    updateDisplay() {
        this.currentNumber.innerText =
          this.getDisplayNumber(this.currentNum)
        if (this.operator != null) {
          this.previousNumber.innerText =
            `${this.getDisplayNumber(this.previousNum)} ${this.operator}`
        } else {
          this.previousNumber.innerText = ''
        }
    }
    
}

const numbers = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operatorbtn");
const deleteNum = document.querySelector(".del-num");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".sum");
const previousNumber = document.querySelector(".previous")
const currentNumber = document.querySelector(".current");

const calculator = new Calculator(previousNumber, currentNumber)

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText)
        calculator.updateDisplay()
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.selectOperator(btn.innerText)
        calculator.updateDisplay()
    })
})

equal.addEventListener('click', btn => {
    calculator.compute()
    calculator.updateDisplay()
})

clear.addEventListener('click', btn => {
    calculator.reset()
    calculator.updateDisplay()
})

deleteNum.addEventListener('click', btn => {
    calculator.delete()
    calculator.updateDisplay()
})
