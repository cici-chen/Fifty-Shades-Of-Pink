import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../client/actions/UserActions'
import * as types from '../../client/actions/actionTypes'
import nock from 'nock'
import sinon from 'sinon'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const testUserInfo={
  "id": 173,
  "user_name": "Cici",
  "user_gender": "woman",
  "lover_name": "John",
  "lover_gender": "man"
}

describe('addUser action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create addUserSuccess and addUserFailure', () => {
    const scope = nock('http://localhost:80')
      .post('/api/v1/users')
      .reply(201, testUserInfo)

    const dispatch = sinon.stub()
      .onFirstCall()
      .callsFake((action) => {
        t.is(action.type, types.ADD_USER_SUCCESS)
        t.deepEqual(action.add_user_status, testUserInfo)
        t.end()
        scope.done()
      })

    const store = mockStore({ stories: [] })
    store.dispatch(actions.addUser())
})
})

describe('getUser action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create getUserSuccess and getUserFailure', () => {
    const scope = nock('http://localhost:80')
      .post('/api/v1/users')
      .reply(200, testUserInfo)

    const dispatch = sinon.stub()
      .onFirstCall()
      .callsFake((action) => {
        t.is(action.type, types.GET_USER_SUCCESS)
        t.deepEqual(action.user, testUserInfo)
        t.end()
        scope.done()
      })

    const store = mockStore({ stories: [] })
    store.dispatch(actions.getUser())
})
})

const testFriendInfo={
  "user_id": 173,
  "friend_name": "Lily"
}

describe('addFriend action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create addFriendSuccess', () => {
    const scope = nock('http://localhost:80')
      .post('/api/v1/users/friend')
      .reply(201, testFriendInfo)

    const dispatch = sinon.stub()
      .onFirstCall()
      .callsFake((action) => {
        t.is(action.type, ADD_FRIEND_SUCCESS)
        t.deepEqual(action.payload, testFriendInfo)
        t.end()
        scope.done()
      })

    const store = mockStore({ stories: [] })
    store.dispatch(actions.addFriend())
})
})

describe('getFriend action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create getFriendSuccess', () => {
    const scope = nock('http://localhost:80')
      .get('/api/v1/users/friend/:userid')
      .reply(200, testFriendInfo)

    const dispatch = sinon.stub()
      .onFirstCall()
      .callsFake((action) => {
        t.is(action.type, 'GET_FRIEND_SUCCESS')
        t.deepEqual(action.payload, testFriendInfo)
        t.end()
        scope.done()
      })

    const store = mockStore({ stories: [] })
    store.dispatch(actions.getFriend())
})
})
