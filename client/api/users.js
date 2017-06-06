import request from 'superagent'

export function getUser(id, callback){
  request
    .get(`/api/v1/users/${id}`)
    .end((err,res) => {
      console.log(id);
      if (err) console.log("error occured while trying to get user info from server api", err)
      else {
        callback(res.body)
      }
    })
}
