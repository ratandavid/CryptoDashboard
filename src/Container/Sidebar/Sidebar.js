import React from 'react';
import './css/Sidebar.css';
import Sidebarcollapselink from '../../Component/Sidebarlink/Sidebarcollapselink';
import Logo from '../../assets/logo-text.png';
import Mainlogo from '../../assets/logo.png';
function Sidebar() {
  return (
    <div className="flex-shrink-0 p-3 sidenav" >
    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none logoholder">
      <div className="Logo">
      <img src={Mainlogo} alt={Mainlogo} className="img-fluid mainlogo"/>
      <img src={Logo} alt="logo-text.png" className="img-fluid logo"/>
      </div>
    </a>
    <ul className="list-unstyled sidebarlistholder ps-0">
      <Sidebarcollapselink/>
      
    </ul>
  </div>
  )
}

export default Sidebar