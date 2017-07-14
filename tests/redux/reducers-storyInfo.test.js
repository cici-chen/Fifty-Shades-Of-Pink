import reducer from '../../client/reducers/storyInfo'

describe('storyInfo reducers', ()=> {
  it('return initial state', ()=>{
    expect(
      reducer(undefined,{})
    ).toEqual(
      {}
    )
  })

  const initalState={}

  it('handles GET_STORY_INFO_SUCCESS, add chapter numbers to state', ()=>{
    expect(
      reducer(initalState,{
        type:"GET_STORY_INFO_SUCCESS",
        payload:"test"
      })
    ).toEqual(
      {
        ...initalState,
        total_chapters:"test"
      }
    )
  })

  it('handles GET_STORY_INFO_FAILURE by adding error to state', ()=>{
    expect(
      reducer(initalState,{
        type:"GET_STORY_INFO_FAILURE",
        payload:"test"})
    ).toEqual(
      {
        ...initalState,
        err:"test"
      }
    )
  })
})
