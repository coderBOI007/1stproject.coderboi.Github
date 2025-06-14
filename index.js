const buttons = document.querySelectorAll('.calc_key');
const topBar = document.querySelector('.top-bar');

let lastOperation = "";
let lastAnswer = ""

const allOperations = ['×', '^', '÷', '+', '-',]

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(topBar.value.includes('=')) {
            topBar.value = ""
        }
        if(btn.classList.contains('opr')) {
            if(btn.classList.contains('clear')) {
                topBar.value = ""
                return
            }
            if(btn.classList.contains('history')) {
                topBar.value = (lastOperation && lastAnswer) ? `${lastOperation} = ${lastAnswer}` : "";
                return
            }
            if(allOperations.includes(topBar.value[topBar.value.length - 1])) {
                console.log("An operation already on the input box")
                return
            } else {
                topBar.value = topBar.value + btn.value
            }
        } else if(btn.classList.contains('equal')) {
            if(allOperations.includes(topBar.value[topBar.value.length - 1] && topBar.value[topBar.value.length - 1] !== '%')) {
                window.alert(`${topBar.value[topBar.value.length - 1]} cannot be the last thing to evaluate`)
                return
            } else {
                console.log(topBar.value, "This is the value that is about to get evaluated")
                lastOperation = topBar.value
                let topBarWithMultiply = topBar.value.split('×').join("*")
                topBarWithMultiply = topBar.value.split('').join("/")
                topBar.value = eval(topBarWithMultiply);
                lastAnswer = eval(topBarWithMultiply)
            }
        } else if(btn.classList.contains('clear')) {
            topBar.value = topBar.value.slice(0, topBar.value.length - 1)
        } else {
            topBar.value = topBar.value + btn.value
        }
    })
})

console.log(buttons, "These are the buttons")