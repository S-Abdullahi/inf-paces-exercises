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


// Adding key and value to object

let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function addDetails(key, value){
    instructorData.additionalData.moreDetails[key] = value
}

addDetails('name', 'olalekan')
addDetails('color',['red','green','cyan'])
console.log(instructorData.additionalData.moreDetails)

// EXERCISE TWO
let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

//   Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

  function addSpeaker(key, value){
      let speakerName = nestedObject.speakers
      speakerName.push({[key]:value})
      
      return speakerName
  }

  addSpeaker('name', 'Abdullahi')
  console.log(nestedObject.speakers)

//   Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

function addLanguage(language,value){
    const languageObject = nestedObject.data.languages
    languageObject[language] = {
        hello : value
    }

    return languageObject
}

addLanguage('Yoruba', 'Ba wo ni')
addLanguage('Arabic', 'Salam')

console.log(nestedObject.data.languages)

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

function addCountry(country,countryCapital,populationNumber){
    const countryObject = nestedObject.data.continents.europe.countries
    countryObject[country] = {
        capital : countryCapital,
        population : populationNumber
    }

    return countryObject
}

addCountry('Nigeria','Abuja', 2000)
console.log(nestedObject.data.continents.europe.countries)