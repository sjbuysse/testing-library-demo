import React from 'react'
import ReactDOM from 'react-dom'
import { Accordion } from './Accordion'

const hats = {title: 'Favorite Hats', contents: 'Fedoras are classy'}
const footware = {
  title: 'Favorite Footware',
  contents: 'Flipflops are the best',
}

const App = () => {
    return <Accordion items={[hats, footware]}/>
}

ReactDOM.render(<App/>, document.getElementById('root'))
