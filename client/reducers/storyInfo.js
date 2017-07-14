export default function storyInfo (state={}, action){
  switch (action.type){
    case 'GET_STORY_INFO_SUCCESS':
      return {
        ...state,
        total_chapters:action.payload
      }
    case 'GET_STORY_INFO_FAILURE':
      return {
        ...state,
        err:action.payload
      }
    default:
      return state
  }
}
