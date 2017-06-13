export default function header(state={},action){
  switch(action.type){
    case 'FETCH_HEADER_SUCCESS':
      return {
        header:action.header
      }
    case 'FETCH_HEADER_FAILURE':
      return {
        err:action.err
      }
    default:
      return state
  }
}
