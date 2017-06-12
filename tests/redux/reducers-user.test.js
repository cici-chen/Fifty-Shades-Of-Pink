import reducer from '../../client/reducers/user'
import * as types from '../../client/actions/actionTypes'

describe('user reducers', ()=> {
  const initalState={}

  test('return initial state', ()=>{
    expect(
      reducer(undefined,{})
    ).toEqual(
      {}
    )
  })

  const user={
    userName: "Sabrina",
    userGender: "woman",
    loverName: "Brad Pitt",
    loverGender: "man"
  }

  test('handles ADD_USER_SUCCESS, add user to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.ADD_USER_SUCCESS,
        user:user
      })
    ).toEqual(
      {
        ...initalState,
        user
      }
    )
  })

  test('handles ADD_USER_FAILURE by adding error to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.ADD_USER_FAILURE,
        err:"something is just no right..."})
    ).toEqual(
      {
        ...initalState,
        err:"something is just no right..."
      }
    )
  })
})
