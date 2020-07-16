import 'react-hot-loader/patch'

import React from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import App from './components/App'

render(<App />, getRoot())
