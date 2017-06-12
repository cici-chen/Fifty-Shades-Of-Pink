import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'

import store from '../../client/store'
import HomePage from '../../client/containers/HomePage'
import HomepageForm from '../../client/components/HomepageForm'

const mountWrapper=mount(
  <Provider store={store}>
    <HomePage/>
  </Provider>
)

describe('containers', ()=> {
  describe('HomePage', ()=>{
    test('render self and subcomponents', ()=>{
      expect(mountWrapper.find(HomepageForm).length).toBe(1)
      expect(mountWrapper.find('form').hasClass('form')).toBe(true)
    })
  })
})
