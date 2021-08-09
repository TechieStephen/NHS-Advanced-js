export default class Person{
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }
}

export function printName(person){
    console.log(person.name)
}

export function printAge(person){
    console.log(person.age)
}

function printHeight(person){
    console.log(person.height)
}

export const accountPin = 1111

// export default accountPin
// export {Person,printName, printAge}

