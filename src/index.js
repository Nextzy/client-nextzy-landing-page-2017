import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './containers/app/App'
import registerServiceWorker from './registerServiceWorker'
import 'animate.css/animate.min.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
