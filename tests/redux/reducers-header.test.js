import reducer from '../../client/reducers/header'
import * as types from '../../client/actions/actionTypes'

describe('header reducers', ()=> {
  const initalState={}

  test('return initial state', ()=>{
    expect(
      reducer(undefined,{})
    ).toEqual(
      {}
    )
  })

  const header="read my story"

  test('handles FETCH_HEADER_SUCCESS, add header to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.FETCH_HEADER_SUCCESS,
        header:header
      })
    ).toEqual(
      {
        ...initalState,
        header:"read my story"
      }
    )
  })

  test('handles FETCH_HEADER_FAILURE by adding error to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.FETCH_HEADER_FAILURE,
        err:"something is just no right..."})
    ).toEqual(
      {
        ...initalState,
        err:"something is just no right..."
      }
    )
  })
})
