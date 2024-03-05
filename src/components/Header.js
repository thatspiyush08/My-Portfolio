import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='https://github.com/thatspiyush08' className='flex items-center justify-between w-full'>
            <div className="flex items-center">
              <img src={Logo} alt='logo' className='mr-2' />
              
            </div>
            <button className='btn btn-sm'>Work with Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
