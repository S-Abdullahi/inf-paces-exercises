let arr = []
arr.push('Abdullahi')
arr.push('Salawu')
arr.unshift('green')


// removing the first element from the array

arr.shift()

let arr2 = []
arr2.push(8)
arr2.push('JavaScript')
console.log(arr)
console.log(arr2)

// checking if an item is the array
console.log(arr2.indexOf(8))

// combining arrays together

let combinedArr = arr.concat(arr2)
console.log(combinedArr)

// PART TWO OF THE ARRAY EXERCISE
let arr3 = ["JavaScript", "Python", "Ruby", "Java"]

let pythonAndRuby = arr3.slice(1,2)
console.log(pythonAndRuby)
let newArray = pythonAndRuby.concat(['Haskell','Clojure'])

let arrayToString = arr3.join(',')
console.log(newArray)
console.log(arrayToString)

// EXERCISE ON ARRAY LOOPING
let people = ['Grey','Mary','Devon','James']
for(let items of people){
    console.log(items)
}

let addPeople = people.shift()
let removePeopleFromTheBack = people.pop()
let removePeople = people.unshift('Matt')
let addPeopleToTheBack = people.push('Abdullahi')

for(let i = 0; i<people.length - 2; i++){
    console.log(people[i])
}

let peopleSlice = people.slice(2)
people.splice(2, 1, 'Eli', 'Artie')
console.log(peopleSlice)
console.log(people)
console.log(people.indexOf('Mary'))

let withBob = people.concat('Bob')
console.log(withBob)