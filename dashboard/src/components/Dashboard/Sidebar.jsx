import React from 'react'
import logo from '../../assets/images/Logo-footer.png'
import { Link } from 'react-router-dom'

export  function Sidebar() {
  return (
<ul className="navbar-nav sidebar sidebar-dark accordion" style={{backgroundColor: '#191717'}} id="accordionSidebar">
 {/* <!-- Sidebar --> */}
{/*  <!-- Sidebar - Brand --> */}
 <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
   <div className="sidebar-brand-icon">
     <img className="w-100" src={logo} alt="Digital House" />
   </div>
 </a>

 {/* <!-- Divider --> */}
 <hr className="sidebar-divider my-0" />

{/*  <!-- Nav Item - Dashboard --> */}
 <li className="nav-item active">
   <Link className="nav-link" to="/">
     <i className="fas fa-fw fa-tachometer-alt"></i>
     <span>Luxury Drinks</span></Link>
 </li>

{/*  <!-- Divider --> */}
 <hr className="sidebar-divider" />

 {/* <!-- Heading --> */}
 <div className="sidebar-heading">ACCIONES</div>

 {/* <!-- Nav Item - Pages --> */}
 <li className="nav-item">
   <Link className="nav-link collapsed" to="/products">
     <i className="fas fa-fw fa-folder"></i>
     <span>Productos</span>
   </Link>
 </li>

 {/* <!-- Nav Item - Charts --> */}
 <li className="nav-item">
   <Link className="nav-link" to="/orders">
     <i className="fas fa-fw fa-chart-area"></i>
     <span>Ordenes</span></Link>
 </li>

 {/* <!-- Nav Item - Tables --> */}
 <li className="nav-item">
   <Link className="nav-link" to="/users">
     <i className="fas fa-fw fa-table"></i>
     <span>Usuarios</span></Link>
 </li>

 {/* <!-- Divider --> */}
 <hr className="sidebar-divider d-none d-md-block" />
</ul>
  )
}
