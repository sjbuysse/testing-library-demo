import React from 'react'
// if you're wondering why not shallow,
// then please read blog.kentcdodds.com/c08851a68bb7
import Enzyme, {mount} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
// import Accordion from '../Accordion'
import Accordion from '../HooksAccordion'

// Setup enzyme's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})

test('setOpenIndex sets the open index state properly', () => {
  const wrapper = mount(<Accordion items={[]} />)
  expect(wrapper.state('openIndex')).toBe(0)
  wrapper.instance().setOpenIndex(1)
  expect(wrapper.state('openIndex')).toBe(1)
})

test('Accordion initially renders AccordionContents with the content of the first item', () => {
  const hats = {title: 'Favorite Hats', contents: 'Fedoras are classy'}
  const footware = {
    title: 'Favorite Footware',
    contents: 'Flipflops are the best',
  }
  const wrapper = mount(<Accordion items={[hats, footware]} />)
  expect(wrapper.find('AccordionContents').props().children).toBe(hats.contents)
})
