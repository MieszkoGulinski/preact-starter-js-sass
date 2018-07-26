import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import ExampleComponent from './ExampleComponent.jsx'

import store from './store'

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root')
  render((
    <Provider store={store}>
      <ExampleComponent />
    </Provider>
  ), root)
})
