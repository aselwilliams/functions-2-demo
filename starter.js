////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2)=>num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2

const calculator = (num1, num2, mathOperation) => {
    if(!isNaN(num1) && !isNaN(num2)){
    // if(+num1 && +num2){
        num1 = +num1;
        num2 = +num2;
        return mathOperation(num1, num2)
    } else {
        console.log('You need to send in numbers')
    }
   return mathOperation(num1, num2)
}
// const results = calculator(50, 30, add)
// const results = calculator(50, 30, subtract)
const results = calculator(50, 0, divide)


console.log(results)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount);

}

const applyFlatDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount;
}

const applyDiscount = (arr, callBack, discount) => {
    arr.forEach((product)=>{
        callBack(product, discount)
    })
}

applyDiscount(dogProducts, applyPercentDiscount, 0.1)
console.log(dogProducts)

applyDiscount(catProducts, applyFlatDiscount, 2)
console.log(catProducts)

const applyDiscountByCategory = (arr, category, callBack, discount) => {
    // arr.filter((prod)=>prod.category === category)
    arr.forEach((product)=>{
        if(product.category === category) {
            callBack(product, discount)
        } 
    })
}
applyDiscountByCategory(dogProducts, 2, applyPercentDiscount, .2)
console.log(dogProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwich(bread){
    return function(ingredients){
        let order = `You ordered a ${bread} bread sandwich with `;
        for(let i = 0; i < ingredients.length; i++){
            if(i===ingredients.length-1 && i!== 0){
                order += ` and ${ingredients[i]}`
            } else if(ingredients.length ===1){
                order += `${ingredients[i]}.`
            } else {
                order += ` ${ingredients[i]},`
            }
        }
        return order
    }
}
const makeWheatSandwich = makeSandwich('Wheat')
const makeSourDoughSandwich = makeSandwich('Sour Dough')

let sand1 = makeWheatSandwich(['turkey'])
let sand2 = makeSourDoughSandwich(['roast beef', 'sour cream', 'onions'])
console.log(sand1)
console.log(sand2)
////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}
console.log(copyArrToCamelCase(lotr))

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
let myArr =[1,2,3,4,5,6]
const multiplyByFour = num => num * 4;

const copyArrAndChange = (arr, callBack) => {
    let results =[];
    for(let i=0; i< arr.length; i++){
        let newValue = callBack(arr[i])
        results.push(newValue)
    }
    return results
}
// let res = copyArrAndChange(myArr, multiplyByFour)
let res = copyArrAndChange(myArr, num => num * 4)
console.log(res)
////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map((el)=> 'pink')
console.log(mappedColors)
/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
    let formalArr = names.map((name)=>`Hello, ${name}`)
    return formalArr
}

// Call formalGreeting passing in the formalNames array
let fnames = formalGreeting(formalNames)
console.log(fnames)
//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

 const placesThatStartWithA = places.filter((place)=> place[0] === 'A')
console.log(placesThatStartWithA)

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const identifier = jobs.filter((el)=> el.programmer)[0]
// call the function passing in the jobs array
console.log(identifier)
let {programmer} = identifier;
console.log(programmer)
//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
    let reduced = numbers.reduce((acc, curr)=> acc * curr)
    return reduced;
}

// CODE HERE


// call productOfArray passing in numsToReduce
let result= productOfArray(numsToReduce)
console.log(result)
/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = expenses.reduce((acc, curr)=>acc - curr.amount, budget)
console.log(remaining)