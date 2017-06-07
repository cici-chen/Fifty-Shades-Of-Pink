// import request from 'superagent'
//
// export function getUser(id, callback){
//   request
//     .get(`/api/v1/users/${id}`)
//     .end((err,res) => {
//       if (err) console.log("error occured while trying to get user info from server api", err)
//       else {
//         callback(res.body)
//       }
//     })
// }
//
// export function saveUser(object, callback){
//   request
//     .post('/api/v1/users')
//     .send(object)
//     .end((err) => {
//       if (err) console.log("error occured while trying to get user info from server api", err)
//       else {
//         callback()
//       }
//     })
// }

//We are calling the api in actions now using fetch to be same as official redux doc
