class Person{
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }
}

function printName(person){
    console.log(person.name)
}

function printAge(person){
    console.log(person.age)
}

function printHeight(person){
    console.log(person.height)
}

const accountPin = 1111

export default accountPin
export {Person,printName, printAge}