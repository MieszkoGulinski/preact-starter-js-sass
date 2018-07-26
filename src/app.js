import { h, render } from 'preact'
import { Provider } from 'preact-redux'

import store from './store'

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root')
  render((
    <Provider store={store}>
      <div>It's working</div>
    </Provider>
  ), root)
})
