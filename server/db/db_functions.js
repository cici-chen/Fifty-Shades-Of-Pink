function getUser(id, connection){
  return connection('users').where('id', id)
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

module.exports = {
  getUser,
  saveUser,
  getStories
}
