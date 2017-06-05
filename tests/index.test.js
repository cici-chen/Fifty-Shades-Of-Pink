import './setup-dom'

import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'


import App from '../client/components/App'

test('<App />', t => {
  const expected = "Read My StoryWelcome! We\'ve been waiting to tell your story!My name is I am awomanmanMy lover\'s name is My lover is awomanmanAdd more elements!My friend\'s name is Read My Stories"
  const wrapper = mount(<App />)
  t.is(wrapper.text(), expected)
})
