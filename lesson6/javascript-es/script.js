someFunctionName()

function someFunctionName() {
    console.log('script 2 just overwrote this function')
}

someFunctionName()

const newFunctionName = (a) => a * 2


const firstObject = {
    name: 'kalli'
}

const similarAsFirstObject = {
    name: 'kalli',
}

console.log(firstObject === similarAsFirstObject)

const referenceToFirstObject = firstObject
console.log(firstObject === referenceToFirstObject)

referenceToFirstObject.age = 20
console.log(referenceToFirstObject)

console.log(firstObject)

console.log(referenceToFirstObject === firstObject)

const copyOfFirstObject = Object.assign({}, firstObject)

console.log(copyOfFirstObject)

copyOfFirstObject.location = 'ntv'

console.log(copyOfFirstObject)
console.log(firstObject)
console.log(firstObject === copyOfFirstObject)

const spreadFirstObject = { ...firstObject } // same as Object.assign({}, firstObject)


const largeObject = {
    name: 'gunnsteinn',
    age: 30,
    location: 'ntv',
    gender: 'male'
}
console.log(largeObject)


const { age, ...rest } = largeObject

console.log(rest)

const person = {
    name: 'gunnsteinn',
    age: 30,
    gender: 'male',
    location: 'hi',
}


const locationInfo = {
    location: 'ntv',
    country: 'Iceland'
}


const personWithLocation = {
    ...locationInfo,
    ...person,
}

console.log(personWithLocation)

const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbers = [2, 4, 6, 8, 10]

const newArray = [...oddNumbers, ...evenNumbers]

console.log(newArray)

const [first, second, third, ...restNumbers] = newArray
console.log(first, third)

const spreadFunction = (...args) => {
    args.forEach(a => { console.log(a) })
}

spreadFunction(1, 2, 3, 4, 5)

newArray.forEach((item, index, array) => {
    console.log(item, index, array)
})

const userOne = {
    name: 'Paul',
    age: 20,
    salary: 600000,
    job: 'software developer'
}

const userTwo = {
    name: 'Lisa',
    age: 30,
    salary: 900000,
    job: 'senior software developer'
}

// input: two objects (userOne and userTwo)
// output: One object as a combination of the two, with only average age and average salary
const calculateAverage = (objectOne, objectTwo) => {
    const { age: ageOne, salary: salaryOne } = objectOne
    const { age: ageTwo, salary: salaryTwo } = objectTwo

    const avgAge = (ageOne + ageTwo) / 2
    const avgSalary = (salaryOne + salaryTwo) / 2

    const averageObject = {
        avgAge,
        avgSalary,
    }
    return averageObject
}

const output = calculateAverage(userOne, userTwo)
console.log(output)



const complexWizards = [
    { name: 'Harry', hair: 'black' },
    { name: 'Ron', hair: 'red' },
    { name: 'Hermione', hair: 'brown' }
]

const renderAllTheWizards = (wizards) => {
    const ulElement = document.getElementById('list')
    wizards.forEach({ name, hair }=> {
    const liElement = document.createElement('li')
    liElement.textContent = name
    liElement.style.color = hair
    ulElement.appendChild(liElement)
})
}

renderAllTheWizards(complexWizards)
