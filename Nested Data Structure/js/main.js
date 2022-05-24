// NESTED OBJECT
let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

//   Using a for loop, console.log all of the numbers in the primeNumbers array.
let primeNumberInArray = nestedData.innerData.numberData.primeNumbers
for(let i = 0; i < primeNumberInArray.length; i++){
    console.log(primeNumberInArray[i])
}

// Using a for loop, console.log all of the even Fibonnaci numbers.
let evenFibonnaci = nestedData.innerData.numberData.fibonnaci
for(let i = 0; i < evenFibonnaci.length; i++){
    if(evenFibonnaci[i]%2 == 0){
        console.log(evenFibonnaci[i])
    }
}

// Console.log the value "second" inside the order array.
let secondValueInOrderArray = nestedData.innerData.order[1]
console.log(secondValueInOrderArray)

// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack('chocolate')
let snacksArray = nestedData.innerData.snacks
console.log(snacksArray)