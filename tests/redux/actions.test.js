import * as StoryActions from '../../client/actions/StoriesActions'
import * as UserActions from '../../client/actions/UserActions'
import * as PageActions from '../../client/actions/PageActions'
import * as types from '../../client/actions/actionTypes'

describe('story actions', ()=> {
  test('fetchStoriesRequest creates an action to indicate fetching in progress',()=>{
    const expectedAction = {
      type: types.FETCH_STORIES_REQUEST
    }
    expect(StoryActions.fetchStoriesRequest()).toEqual(expectedAction)
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
    expect(StoryActions.fetchStoriesSuccess(stories)).toEqual(expectedAction)
  })

  test('fetchStoriesFailure creates an action to return err',()=>{
    const err = "internal server error"
    const expectedAction = {
      type: types.FETCH_STORIES_FAILURE,
      err
    }
    expect(StoryActions.fetchStoriesFailure(err)).toEqual(expectedAction)
  })
})

describe('user actions', ()=> {
  test('addUserSuccess creates an action to add a user to store',()=>{
    const user={
      userName: "Sabrina",
      userGender: "woman",
      loverName: "Brad Pitt",
      loverGender: "man"
    }

    const expectedAction = {
      type: types.ADD_USER_SUCCESS,
      user
    }
    expect(UserActions.addUserSuccess(user)).toEqual(expectedAction)
  })

  test('addUserFailure creates an action to return err',()=>{
    const err = "internal server error"
    const expectedAction = {
      type: types.ADD_USER_FAILURE,
      err
    }
    expect(UserActions.addUserFailure(err)).toEqual(expectedAction)
  })
})

describe('page actions', ()=> {
  test('fetchHeaderSuccess creates an action to add page header to store',()=>{
    const header='read my story'
    const expectedAction = {
      type: types.FETCH_HEADER_SUCCESS,
      header
    }
    expect(PageActions.fetchHeaderSuccess(header)).toEqual(expectedAction)
  })

  test('fetchHeaderFailure creates an action to return err',()=>{
    const err = "internal server error"
    const expectedAction = {
      type: types.FETCH_HEADER_FAILURE,
      err
    }
    expect(PageActions.fetchHeaderFailure(err)).toEqual(expectedAction)
  })
})
