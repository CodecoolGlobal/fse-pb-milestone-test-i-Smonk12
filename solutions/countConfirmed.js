/*
Fill the function countConfirmed(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "username": "steve.simon",
  "email": "steve.simon12@gmail.com",
  "phone": "+44701231231",
  "isConfirmed": true
}
Count the users where the isConfirmed key's value is true and return the amount as a number.
If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1.
*/



let confirmCount = 0
const countConfirmedUsers = []

function countConfirmed(users) {
  for (const key in users) {
    if (users[key].isConfirmed == true) {
      countConfirmedUsers.push("confirmed")
      confirmCount += 1}

      if (users[key].isConfirmed == false) {
        countConfirmedUsers.push("nonConfirmed")
      }
  }
  console.log(confirmCount)
      console.log(countConfirmedUsers)
}
countConfirmed(users)

module.exports = countConfirmed;
