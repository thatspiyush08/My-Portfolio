import React from 'react';


const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='https://github.com/thatspiyush08'  className='flex items-center justify-between w-full'>
            <div className='text-[55px] font-bold leading-[0.8] lg:text-[30px] mb-4'>
              Piyush <br></br>  Narula
              
            </div>
            <button className='btn btn-sm'>Work with Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
