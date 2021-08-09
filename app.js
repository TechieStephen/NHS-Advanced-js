import Person from './modules.js'
import { printName as pn, printAge } from './modules.js'

const gift = new Person('gift', 35, 9)

printAge(gift)
printName(gift)