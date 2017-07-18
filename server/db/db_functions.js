function getUsers(connection){
  return connection('users').select()
}

function saveUser(object, connection){
  return connection('users').insert(
    {user_name:object.user_name,
     user_gender:object.user_gender,
     lover_name:object.lover_name,
     lover_gender:object.lover_gender
   }
  )
}

function saveFriend(object, connection){
  return connection('users_friends').insert(
    {
      users_id:object.user_id,
      friend_name:object.friend_name
    }
  )
}

function getFriend(userID, connection){
  return connection('users_friends').where('users_id', userID).first("friend_name")
}
//output= {"friend_name": "'lily'"}

function getStories(connection){
  return connection('stories').select()
}

function getStoryInfo(storyName, connection){
  return connection('stories').where('name', storyName).first("total_chapters")
}

function getHeader(pageUrl,connection){
  return connection('headers').where('pageUrl',pageUrl).first()
}

function getStoryTags(storyID, connection){
  return connection('stories_tags').where('stories_id',storyID).select("tag","stories_id")
}

module.exports = {
  getUsers,
  saveUser,
  getStories,
  getHeader,
  saveFriend,
  getFriend,
  getStoryInfo,
  getStoryTags
}
