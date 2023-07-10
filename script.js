const result = document.querySelector('.result')
const operation = document.querySelector('.operation')
const clean = document.querySelector('.clean')
const cleanAll = document.querySelector('.clean-all')

cleanAll.addEventListener('click', () => {
    result.innerText = '0'
    operation.innerText = ''
})

clean.addEventListener('click', () => {
    operation.innerText = operation.innerText.substring(0, operation.innerText.length - 1)
})

const calculation = () => {
    try {
        if (result) {
            calc = eval(operation.innerText)
            if(isNaN(calc) || calc == undefined) {
                return result.innerText = "Sintaxe error"
             } else {
                result.innerText = calc
             }
        }
    } catch {
        result.innerText = 'Sintaxe error'
    }    
}

const insert = (elem) => {
    if (
      (elem === "." && operation.includes(".")) ||
      (["+", "-", "*", "/"].includes(elem) &&
        ["+", "-", "*", "/"].includes(operation.slice(-1)))
    ) {
      return;
    }
    operation.innerText += elem
    return operation
}
