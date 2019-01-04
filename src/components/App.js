import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import SimpleAppBar from './SimpleAppBar';
import PagesRouter from './PagesRouter'
import Footer from './Footer'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <SimpleAppBar />
      <PagesRouter />
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default App
