const array = [1, 2, 3, 6, 6, 8, 9]
//simple method
{
  let sum = 0
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum)
}
//good method
{
  let sum = array.reduce((accum, next) => accum + next, 0)
  console.log(sum)
}
