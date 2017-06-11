import reducer from '../../client/reducers/storyLibrary'
import * as types from '../../client/actions/actionTypes'

describe('storyLibrary reducers', ()=> {
  test('return initial state', ()=>{
    expect(
      reducer(undefined,{})
    ).toEqual(
      {
        loading:false,
        stories:[],
        err:null
      }
    )
  })

  const initalState={
    loading:false,
    stories:[],
    err:null
  }

  test('handles FETCH_STORIES_REQUEST, add loading to state', ()=>{
    expect(
      reducer(initalState,{
        type:types.FETCH_STORIES_REQUEST
      })
    ).toEqual(
      {
        ...initalState,
        loading:true
      }
    )
  })

  const stories=[
    {id:1, story:"Tangled"},
    {id:2, story:"Brave"}
  ]

  test('handles FETCH_STORIES_SUCCESS by adding stories to state and turn loading off', ()=>{
    expect(
      reducer(initalState,{
        type:types.FETCH_STORIES_SUCCESS,
        stories:stories})
    ).toEqual(
      {
        ...initalState,
        stories:stories,
        loading:false
      }
    )
  })

  test('handles FETCH_STORIES_FAILURE by adding error to state', ()=> {
    expect(
      reducer(initalState, {
        type:types.FETCH_STORIES_FAILURE,
        err:"shit went wrong"
      })
    ).toEqual(
      {
        ...initalState,
        err:"shit went wrong"
      }
    )
  })

})
