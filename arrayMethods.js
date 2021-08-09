todoList = ['wash plate', 'Go to the Gym']
age = 67

// Array.isArray()
// The isArray() method checks whether an object is an array.
console.log(Array.isArray(todoList))
console.log(Array.isArray(age))

// Array.forEach()
// The forEach() method calls a function once for each array element.

todoList.forEach((element) => {
    
});

x = document.getElementById("sdf")

x.addEventListener('click', )

// Array.map()
// Creates a new array by performing 
//a function on each array element.

newArray = todoList.map((item, index)=>{
    console.log(index)
    return item + "1"
})

console.log(newArray)
console.log(todoList)

// Array.filter()
var numbers = [45, 42, 95, 166, 25];

var over20 = numbers.filter(myFunction)

function myFunction(item){
    return item > 20
}
console.log(over20)

// Array.every()

var result = numbers.every((item)=>{
    return item > 20
})

console.log(result)

// alert(numbers.includes(4))


