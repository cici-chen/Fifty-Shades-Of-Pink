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
        payload:'test'
      })
    ).toEqual(
      {
        ...initalState,
        add_user_status:'test'
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

  test('handles GET_USER_SUCCESS, add user to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.GET_USER_SUCCESS,
        user:user
      })
    ).toEqual(
      {
        ...initalState,
        user
      }
    )
  })

  test('handles GET_USER_FAILURE by adding error to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.GET_USER_FAILURE,
        err:"shiet is broken"})
    ).toEqual(
      {
        ...initalState,
        get_user_error:"shiet is broken"
      }
    )
  })

  it('handles ADD_FRIEND_FAILURE', ()=>{
    expect(
      reducer(initalState,{
        type:'ADD_FRIEND_FAILURE',
        err:'test'
      })
    ).toEqual({
        ...initalState,
        add_friend_error:'test'
      })
  })

  it('handles ADD_FRIEND_SUCCESS', ()=>{
    expect(
      reducer(initalState,{
        type:'ADD_FRIEND_SUCCESS',
        payload:'test'
      })
    ).toEqual({
        ...initalState,
        friend:'test'
      })
  })

  it('handles GET_FRIEND_FAILURE', ()=>{
    expect(
      reducer(initalState,{
        type:'GET_FRIEND_FAILURE',
        err:'test'
      })
    ).toEqual({
        ...initalState,
        get_friend_error:'test'
      })
  })

  it('handles GET_FRIEND_SUCCESS', ()=>{
    expect(
      reducer(initalState,{
        type:'GET_FRIEND_SUCCESS',
        payload:'test'
      })
    ).toEqual({
        ...initalState,
        friend:'test'
      })
  })
})
