import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../client/actions/StoriesActions'
import * as types from '../../client/actions/actionTypes'
import nock from 'nock'
import sinon from 'sinon'
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
    const scope = nock('http://localhost:80')
      .get('/api/v1/stories')
      .reply(200, testStoriesInfo)

    const dispatch = sinon.stub()
      .onFirstCall()
      .callsFake((action) => {
        t.is(action.type, types.FETCH_STORIES_REQUEST)
      })
      .onSecondCall()
      .callsFake((action) => {
        t.is(action.type, types.FETCH_STORIES_SUCCESS)
        t.deepEqual(action.stories, testStoriesInfo)
        t.end()
        scope.done()
      })

    const store = mockStore({ stories: [] })
    store.dispatch(actions.fetchStories())
})
})
