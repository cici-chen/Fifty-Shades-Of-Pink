function getUsers(connection){
  return connection('users').select()
}

function saveUser(object, connection){
  var obj = {}
  for (var key in object) {
    obj[key]=object.key
  }
  console.log(obj)
  return connection('users').insert(
    obj
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
