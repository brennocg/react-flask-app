import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/en'

import React from 'react'
import { render } from 'react-dom'
import 'style/style.css'
import App from 'app'


render(
    <App />
    , document.getElementById('root')
)
