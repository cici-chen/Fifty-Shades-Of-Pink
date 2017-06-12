export default function user(state={}, action){
  switch (action.type){
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        user:action.user
      }

    case 'ADD_USER_FAILURE':
      return{
        ...state,
        err:action.err
      }
    default:
      return state
  }
}
