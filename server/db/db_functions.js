function getUsers(connection){
  return connection('users').select()
}

function saveUser(object, connection){
  return connection('users').insert(
    {
    user_name:object.user_name,
    user_gender:object.user_gender,
    lover_name:object.lover_name,
    lover_gender:object.lover_gender
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
