const results = document.querySelector("#res")
const zeroBtn = document.querySelector("#btn0")
const oneBtn = document.querySelector("#btn1")
const sumBtn = document.querySelector("#btnSum")
const subBtn = document.querySelector("#btnSub")
const mulBtn = document.querySelector("#btnMul")
const divBtn = document.querySelector("#btnDiv")
const eqlBtn = document.querySelector("#btnEql")
const btnsContainer = document.querySelector("#btns")

const handleInput = (e)=> {
  let temp = results.innerText;
  if (e.target.innerText === '=') {
    //call function to do calc
    console.log('better do some calculation function')
    temp = performEquation(temp);
  } else if (e.target.innerText === 'C') {
    temp = '';
    console.log('clear field')
  } else {
    temp += e.target.innerText;
  }
  results.innerText = temp;
}

const performEquation = (input) => {
  if (input.includes("+")) {
    const arrayOfInput = input.split('+')
    return (Number(arrayOfInput[0]) + Number(arrayOfInput[1]))
  } else if (input.includes("-")) {
    const arrayOfInput = input.split('-')
    console.log(arrayOfInput)
    return (Number(arrayOfInput[0]) - Number(arrayOfInput[1]))
  } else if (input.includes("/")) {
    const arrayOfInput = input.split('/')
    console.log(arrayOfInput)
    return (Math.floor(Number(arrayOfInput[0]) / Number(arrayOfInput[1])))
  } else if (input.includes("*")) {
    const arrayOfInput = input.split('*')
    console.log(arrayOfInput)
    return (Number(arrayOfInput[0]) * Number(arrayOfInput[1]))
  } else {
    return "No operation, please clear and try again"
  }
}

btnsContainer.addEventListener('click',(e) => handleInput(e))
