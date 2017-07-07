function getUsers(connection){
  return connection('users').select()
}
//
// function saveUser(object, connection){
//   var obj = {}
//   for (var key in object) {
//     obj[key]=object[key]
//   }
//   return connection('users').insert(
//     obj
//   )
// }
function saveUser(object, connection){
  console.log("apple",object)
  return connection('users').insert(
    {user_name:object.user_name,
     user_gender:object.user_gender,
     lover_name:object.lover_name,
     lover_gender:object.lover_gender,
     friend_name:object.friend_name
   }
  )
}

function getStories(connection){
  return connection('stories').select()
}

function getHeader(pageUrl,connection){
  return connection('headers').where('pageUrl',pageUrl).first()
}

module.exports = {
  getUsers,
  saveUser,
  getStories,
  getHeader
}
