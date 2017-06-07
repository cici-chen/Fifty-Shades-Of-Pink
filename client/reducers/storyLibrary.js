const initalState = {
  loading:false,
  stories:[],
  err:null
}

export default function storyLibrary (state=initalState, action){
  switch (action.type){
    case 'FETCH_STORIES_REQUEST':
      return {...state,loading:true}
    case 'FETCH_STORIES_SUCCESS':
      return {...state,stories:action.stories}
    case 'FETCH_STORIES_FAILURE':
      return {...state,error:action.err}
    default:
      return initalState
  }
}
