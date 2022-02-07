const array = [{name: 'Patric', age: 22}, {name: 'Anna', age: 32}, {name: 'Jake', age: 19}]
//sort at age/number fields
{
  array.sort((user1, user2) => user1.age - user2.age)
  console.log(array)
}
//sort at name/string fields
{
  array.sort((user1, user2) => {
    let name1 = user1.name.toLowerCase()
    let name2 = user2.name.toLowerCase()
    if (name1 < name2) {
      return -1
    }
    if (name1 === name2) {
      return 0
    }
    return 1
  })
  console.log(array, 'array')
}
//sort at name/string fields SHORT
{
  array.sort((user1, user2) => {
    return user1.name.localeCompare(user2.name)
  })
  console.log(array, 'localeCompare')
}
