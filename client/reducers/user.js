export default function user(state={}, action){
  switch (action.type){
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        add_user_status:action.payload
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
    case 'ADD_FRIEND_FAILURE':
      return{
        ...state,
        add_friend_error:action.err
      }
    case 'ADD_FRIEND_SUCCESS':
      return{
        ...state,
        friend:action.payload
      }
    case 'GET_FRIEND_FAILURE':
      return{
        ...state,
        get_friend_error:action.err
      }
    case 'GET_FRIEND_SUCCESS':
      return{
        ...state,
        friend:action.payload
      }
    default:
      return state
  }
}
