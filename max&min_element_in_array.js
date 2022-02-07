const array = [1, 2, 43, 3, 6, 99, 6, 8, 9]
//simple method
{
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    max = array[i] > max ? array[i] : max
  }
  console.log(max)
}
//good method
{
  let max = array.reduce((accum, next) => Math.max(accum, next))
  console.log(max)
}
//short but strange method
{
  let max = Math.max(...array)
  console.log(max)
}
