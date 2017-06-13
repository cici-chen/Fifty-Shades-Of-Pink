export default function user(state={}, action){
  switch (action.type){
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        add_user_status:action.add_user_status
      }

    case 'ADD_USER_FAILURE':
      return{
        ...state,
        err:action.err
      }
    case 'GET_USER_SUCCESS':
      return{
        ...state,
        user:action.user
      }
    case 'GET_USER_FAILURE':
      return{
        ...state,
        get_user_error:action.err
      }
    default:
      return state
  }
}
