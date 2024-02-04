import React from 'react';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import './index.scss';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="Logo S" />
      <img src={LogoSubtitle} alt="Piyush" />
    </Link>
  </div>
);

export default Sidebar;