// function Todo(title, completed)
// {
//     this.title = title
//     this.completed = completed

//     this.showName = function() {
//         return this.title + " " + this.completed
//     }
// }

class Animal{
    constructor(skinColor, legs){
        this.skinColor = skinColor
        this.legs = legs
    }

    showName(){
        return this.skinColor + " " + this.legs
    }

    // static sayHi(){
    //     alert('Holla')
    // }
}

class Dog extends Animal{
    constructor(breed){
        super(skinColor, legs)
        this.breed = breed
    }

    show(){
    }
}

dog1 = new Dog('pitBull', 'red', 4)

// todo3 = new Todo('Gift', true)
// todo4 = new Todo('dhjfdhd', false)

// Todo.sayHi()

// console.log(todo3.showName(3))
// console.log(todo4.showName(10))

console.log(dog1.showName())
