import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../client/actions'
import * as types from '../../client/actions/actionTypes'
import nock from 'nock'
//I'm using jest here, so apparently I don't need to import the library

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

  it('create RECEIVE_STORIES upon FETCH_STORIES_REQUEST', () => {
    nock('http://localhost:80')
      .get('/api/v1/stories')
      .reply(200, testStoriesInfo)

    const expectedActions = [
      { type: types.FETCH_STORIES_REQUEST },
      { type: types.RECEIVE_STORIES, stories: testStoriesInfo }
    ]
    const store = mockStore({ stories: [] })

    return store.dispatch(actions.fetchStories())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
