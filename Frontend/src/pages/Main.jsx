import React from 'react'
import Home from '../companents/Home'
import Products from '../companents/Products'
import About from '../companents/About'
import Leadership from '../companents/Leadership'
import Services from '../companents/Services'
import {Helmet} from "react-helmet";

function Main() {
  return (
    <div>
      <Helmet>
      <link rel="icon" type="image/svg+xml" href="https://is.gd/WEb9KZ" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Selling page</title>
      </Helmet>
      <Home/>
      <Products/>
      <About/>
      <Leadership/>
      <Services/>
    </div>
  )
}

export default Main
