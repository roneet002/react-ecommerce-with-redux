import React from 'react'
import TopMenu from '../Common/TopMenu/TopMenu'
import Footer from '../Common/Footer/Footer'
import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
<TopMenu />
<main>
    <Outlet />
</main>
<Footer/>

    </>
  )
}

export default RootLayout
