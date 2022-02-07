const array = [9, 'string', '', 6, false, NaN]
//simple method
{
  const notFalsy = []
  for (let i = 0; i < array.length; i++) {
    if(!!array[i]) {
      notFalsy.push(array[i])
    }
  }
  console.log(notFalsy)
}
//good method
{
  const notFalsy = array.filter((elem)=> !!elem)
  console.log(notFalsy)
}
