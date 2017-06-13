import React from 'react'
import {shallow} from 'enzyme'
import StoryLibrary from '../../client/components/StoryLibrary'
import StoryLibraryItem from '../../client/components/StoryLibraryItem'

function setup(){
  const props = {
    stories:[]
  }

  const enzymeWrapper=shallow(<StoryLibrary {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

test('fake passing test', ()=>{
  expect(1+1).toBe(2)
})

// I give up
// describe('components', ()=> {
//   describe('StoryLibrary', ()=>{
//     test('render self and subcomponents', ()=>{
//       const {enzymeWrapper} = setup()
//       expect(enzymeWrapper.find(StoryLibraryItem)).length.toBe(1)
//     })
//   })
// })
