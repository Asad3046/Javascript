let age = 24
let score = "24ab"

let valueInString = String(age) //converting a number into string 
console.log(typeof valueInString) //printing the type of converted variable

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) //NaN

/*
"24" => 24
24abc => NaN
true => 1, false => 0 
*/

let isLoggedIn = "Asad"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true, 0 => false
"" => false
"Asad" => true
*/





