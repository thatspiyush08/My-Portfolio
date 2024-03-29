import React from 'react';

import {BiHomeAlt,BiUser} from 'react-icons/bi';
import{ BsBriefcase,BsChatSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link to='home' activeClass='active' spy={true} smooth={true} offset={-200}>
        <BiHomeAlt className='cursor-pointer w-[40px] h-[25px] flex items-center justify-center'></BiHomeAlt>
        </Link>
        <Link to='about' activeClass='active' spy={true} smooth={true}>
        <BiUser className='cursor-pointer w-[40px] h-[25px] flex items-center justify-center'></BiUser>
        </Link>
        
        <Link to='work' activeClass='active' spy={true} smooth={true}>
        <BsBriefcase className='cursor-pointer w-[40px] h-[25px] flex items-center justify-center'></BsBriefcase>
        </Link>
        <Link to='contact' activeClass='active' spy={true} smooth={true}>
        <BsChatSquare className='cursor-pointer w-[40px] h-[25px] flex items-center justify-center'></BsChatSquare>
        </Link>
        

      </div>
    </nav>
  );
};

export default Nav;
