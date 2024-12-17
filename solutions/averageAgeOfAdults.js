/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

const averageAgeNumbers = []

  
  function getNumbers(){
  for (const key in averageAgeData) {
    averageAgeNumbers.push(averageAgeData[key].age)
    }
  }
  getNumbers(averageAgeData)
console.log(averageAgeNumbers)


let sum = 0
let average = 0

  function averageAgeOfAdults() {
for (let index = 0; index < averageAgeNumbers.length; index++){
  sum += averageAgeNumbers[index];}
  average = sum / averageAgeNumbers.length;
  return average
  }
  averageAgeOfAdults(averageAgeNumbers)



module.exports = averageAgeOfAdults;
