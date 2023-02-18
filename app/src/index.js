import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './js/App'

const rootEl = document.createElement('div')
document.body.appendChild(rootEl)
const root = ReactDOM.createRoot(rootEl)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
