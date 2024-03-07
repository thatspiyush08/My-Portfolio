import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img11.png';
import Img2 from '../assets/portfolio-img21.png';
import Img3 from '../assets/portfolio-img33.png';

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>

      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div  variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} 
         className='flex-1 flex flex-col gap-y-11 mb-10 lg:mb-0'>

          <div>
            
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br/>
              Projects
            </h2>
            <p className='max-w-sm mb-16'>
              Projects are something that I love to do. I have worked on various projects. Here are some of my latest projects. Click the button below to view all of my projects.
            </p>
            <a href='https://github.com/thatspiyush08?tab=repositories'>
            <button className='btn btn-sm'>View all projects</button>
            </a>
            
          </div>
          <a href='https://real-time-crypto-price.vercel.app/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="Project Image" style={{ width: '600px', height: '320px' }} />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Project 1</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Real Time Crypto Price Teller</span>
            </div>
            </div>
          </a>
            

        </motion.div>
        <motion.div  variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}
        className='flex-1 flex flex-col gap-y-8'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          <a href='https://todo-react-blush-seven.vercel.app/'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} style={{ width: '600px', height: '350px' }}alt="Project Image" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Project 2</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Todo Application Using React</span>
            </div> </a>
            
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          <a href='https://github.com/thatspiyush08/Stick-Hero/tree/main'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="Project Image" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Project 3</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stick Hero Game</span>
            </div>
          </a>
            
        </div>
        </motion.div>
        
      </div>
      
    </div>
  </section>;
};

export default Work;
