/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function users(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/


function averageAgeOfAdults(users) {
const averageAgeNumbers = []
  for (const key in users) {
    if (users[key].age >= 18)
      averageAgeNumbers.push(users[key].age)
  }

let sum = 0
let average = 0
console.log(averageAgeNumbers)

  for (let index = 0; index < averageAgeNumbers.length; index++) {
    sum += averageAgeNumbers[index];
  }
  average = sum / averageAgeNumbers.length;
  return average
}



module.exports = averageAgeOfAdults;
