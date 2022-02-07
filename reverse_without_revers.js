const array = [1, 2, 3, 6, 6, 8, 9]
//simple method
{
  const reversed = []
  for (let i = array.length -1; i >= 0; i--) {
    reversed.push(array[i])
  }
  console.log(reversed)
}
//good method
{
  const reversed = array.map((elem, index, array) =>array[array.length - index -1])
  console.log(reversed)
}
