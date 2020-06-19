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
    // regular base10 addition    return (Number(arrayOfInput[0]) + Number(arrayOfInput[1]))
    // arrayOfInput has two strings with the two numbers
    // call binaryAdd(arg1, arg2)
    return binaryAdd(arrayOfInput[0], arrayOfInput[1])
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


const binaryAdd = (num1, num2) => {
  const arrayOfNum1 = num1.split('')
  console.log(arrayOfNum1);
  const arrayOfNum2 = num2.split('')
  console.log(arrayOfNum2);
  //reverse arrays and perform adding algorithm
  arrayOfNum1.reverse()
  console.log(arrayOfNum1);
  arrayOfNum2.reverse()
  console.log(arrayOfNum2);
  //get the length of the smaller array
  let smallerArrayLength;
  let longerArrayLength;
  let longerArrayCopy;
  if (arrayOfNum1.length < arrayOfNum2.length) {
    smallerArrayLength = arrayOfNum1.length;
    longerArrayLength = arrayOfNum2.length;
    longerArrayCopy = arrayOfNum2
  } else {
    smallerArrayLength = arrayOfNum2.length;
    longerArrayLength = arrayOfNum1.length;
    longerArrayCopy = arrayOfNum1
  }
  console.log('the smaller arrayLength is', smallerArrayLength);
  // go through the arrays and add, if both 1, then carry over to next spot
  // start making the new array of the result
  // initialize something for carry - over
  let carryOver = false;
  let resultArray = []
  console.log(resultArray)
  for (let i=0; i<smallerArrayLength; i++) {
    // no carry over and both 1
    if (arrayOfNum1[i] === '1' && arrayOfNum2[i] === '1' && !carryOver) {
      //need to set carryOver to true, and set to zero for that spot
      carryOver = true;
      resultArray.push('0');
      console.log(resultArray)
    } 
    // carry over is true and both 1
    else if (arrayOfNum1[i] === '1' && arrayOfNum2[i] === '1' && carryOver) {
      //need to set carryOver to true, and set to zero for that spot
      carryOver = true;
      resultArray.push('1');
      console.log(resultArray)
    } 
    // carry over is true and one has 1
    else if ((arrayOfNum1[i] === '1' || arrayOfNum2[i] === '1') && carryOver) {
      //need to set carryOver to true, and set to zero for that spot
      carryOver = true;
      resultArray.push('0');
      console.log(resultArray)
    } 
    // carry over is false and one has 1
    else if ((arrayOfNum1[i] === '1' || arrayOfNum2[i] === '1') && !carryOver) {
      //need to set carryOver to true, and set to zero for that spot
      carryOver = false;
      resultArray.push('1');
      console.log(resultArray)
    } 
    // carry over is false and both are 0
    else if ((arrayOfNum1[i] === '0' && arrayOfNum2[i] === '0') && !carryOver) {
      //need to set carryOver to true, and set to zero for that spot
      carryOver = false;
      resultArray.push('0');
      console.log(resultArray)
    }
  }
  //pick up after the end of the smallerArray, now loop through the remaining part of the longer array, and push, checking if carryOveris true
  for (let i=smallerArrayLength; i<longerArrayLength; i++) {
    if (longerArrayCopy[i] === '1' && carryOver) {
      resultArray.push('0');
      carryOver = true;
    } else if (longerArrayCopy[i] === '0' && carryOver) {
      resultArray.push('1');
      console.log(resultArray)
      carryOver = false;
    } else if (longerArrayCopy[i] === '1' && !carryOver) {
      resultArray.push('1');
      console.log(resultArray)
      carryOver = false;
    } else if (longerArrayCopy[i] === '0' && !carryOver) {
      resultArray.push('0');
      console.log(resultArray)
      carryOver = false;
    }
  }
  //check if carryOver is true, if so add 1 more to array
  if(carryOver) {
    resultArray.push('1');
  }
  console.log(resultArray);
  // Now reverse the array
  resultArray.reverse()
  console.log('reversed back', resultArray)
  // then turn it into a string
  let resultString = resultArray.join('');
  console.log(resultString);
  return resultString
  //at the end of the loop, if carryOver is true, need to push one more into array with value of 1, but there might be a value in the longer array there...
}

