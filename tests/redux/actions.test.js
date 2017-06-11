import * as actions from '../../client/actions/StoriesActions'
import * as types from '../../client/actions/actionTypes'

describe('actions', ()=> {
  test('fetchStoriesRequest creates an action to indicate fetching in progress',()=>{
    const expectedAction = {
      type: types.FETCH_STORIES_REQUEST
    }
    expect(actions.fetchStoriesRequest()).toEqual(expectedAction)
  })

  test('fetchStoriesSuccess creates an action to return stories',()=>{
    const stories=[
      {id:1, story:"Tangled"},
      {id:2, story:"Brave"}
    ]
    const expectedAction = {
      type: types.FETCH_STORIES_SUCCESS,
      stories:stories
    }
    expect(actions.fetchStoriesSuccess(stories)).toEqual(expectedAction)
  })

  test('fetchStoriesFailure creates an action to return err',()=>{
    const err = "internal server error"
    const expectedAction = {
      type: types.FETCH_STORIES_FAILURE,
      err
    }
    expect(actions.fetchStoriesFailure(err)).toEqual(expectedAction)
  })
})
