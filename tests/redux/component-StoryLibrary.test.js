import React from 'react'
import {shallow} from 'enzyme'
import StoryLibrary from '../../client/components/StoryLibrary'

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

describe('components', ()=> {
  describe('StoryLibrary', ()=>{
    test('render self and subcomponents', ()=>{
      const {enzymeWrapper} = setup()
      expect(enzymeWrapper.find('h2').text()).toBe('Choose A Story')
    })
  })
})
