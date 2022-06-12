let client = {
    firstName: 'Abdullahi',
    lastName: 'Salawu',
    occupation: 'freelancer'
};

console.log(client.firstName)
console.log(client.lastName)
console.log(client.occupation)

console.log(client['firstName'])
console.log(client['lastName'])
console.log(client['occupation'])

client['hobby'] = 'gym'
console.log(client)

delete client.occupation
console.log(client)

// OBJECT EXERCISE

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

namesAndHobbies['name'] = 'Abdullahi'
namesAndHobbies['hobyy'] = 'gym'

for(let items in namesAndHobbies){
    console.log(`${namesAndHobbies[items]} => ${items}`)
}

if('name' in namesAndHobbies){
    console.log(namesAndHobbies.name)
}

// ANOTHER EXERCISE
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go')
programming.difficulty = 7
delete programming['jokes']
programming.isFun = 'true'

for(let element of programming.languages){
    console.log(element)
}

for (let item in programming){
    console.log(item)
    console.log(programming[item])
}

console.log(programming)