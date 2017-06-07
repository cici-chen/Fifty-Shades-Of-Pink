import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../client/actions'
import * as types from '../../client/actions/actionTypes'
import nock from 'nock'
//I'm using jest here, so apparently I don't need to import the library

import {getStories} from '../../client/api/stories'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const testStoriesInfo=[
  {
    id:1,
    name:"fifty-shades-of-pink"
  },
  {
    id:2,
    name:"hotel-room"
  }
]

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create RECEIVE_STORIES upon FETCH_STORIES_REQUEST', (done) => {
    nock('http://localhost:80')
      .get('/api/v1/stories')
      .reply(200, testStoriesInfo)

    const expectedActions = [
      { type: types.FETCH_STORIES_REQUEST },
      { type: types.FETCH_STORIES_SUCCESS, stories: testStoriesInfo }
    ]
    const store = mockStore({ stories: [] })

    function fetchStoriesRequest(){
      return{
        type: types.FETCH_STORIES_REQUEST
      }
    }

    function fetchStoriesSuccess(stories){
      return{
        type: types.FETCH_STORIES_SUCCESS,
        stories
      }
    }

    function fetchStoriesFailure(err){
      return{
        type: types.FETCH_STORIES_FAILURE,
        err
      }
    }

    function fetchStories(){
      return dispatch => {
        dispatch(fetchStoriesRequest())
        return getStories((err,stories)=>{
          dispatch(fetchStoriesSuccess(stories))
          expect(store.getActions()).toEqual(expectedActions)
          console.log(store.getActions());
          done()
        })
      }
    }

    store.dispatch(fetchStories())
  })
})
