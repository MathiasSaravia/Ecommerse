import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from '../components/Dashboard/Sidebar'
import { Topbar } from '../components/Dashboard/Topbar'
import { Footer } from '../components/Dashboard/Footer'
import { Outlet } from 'react-router-dom'

const Root = props => {
  return (
    <>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
       <div id="content">
      <Topbar/>

      <Outlet/>

      <Footer/>
    </div>
    </div>
    </div>
     </>
  )
}

Root.propTypes = {}

export default Root
