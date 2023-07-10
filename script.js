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

    let operationResult = operation.innerText
    operationResult = operationResult.replace('x', '*')
    operationResult = operationResult.replace('÷', '/')
    operationResult = operationResult.replace('^', '**')
    operationResult = operationResult.replace('√', '**0.5')

    try {
         result.innerText = eval(operationResult)
    } catch {
        result.innerText = 'Sintaxe error'
    }    
}

const insertDigit = (digit) => {
    if (
        (digit === "." && operation.innerText.includes(".")) ||
        (["+", "-", "x", "√","÷","^"].includes(digit) &&
          ["+", "-", "x", "√","÷","^"].includes(operation.innerText.slice(-1)))
      ) {
        return;
      }

    operation.innerText += digit
    return operation
}
