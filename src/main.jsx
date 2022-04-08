import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Image from 'react-bootstrap/Image'

ReactDOM.render(
  <React.StrictMode>
    <Image src="./assets/images/logo.png" className="mt-5 mb-5 mx-auto d-block"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
