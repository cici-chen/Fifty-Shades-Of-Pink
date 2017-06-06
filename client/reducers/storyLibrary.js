export default function storyLibrary (state=[], action){
  switch (action.type){
    case 'RECEIVE_STORIES':
      return [action.stories]
    default:
      return state
  }
}
