function getUser(id, connection){
  return connection('users').where('id', id)
}

module.exports = {
  getUser
}
