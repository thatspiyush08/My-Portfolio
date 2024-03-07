import React from 'react';
import Image from '../assets/avatar.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[100px] mb-4'>
              Piyush <span>Narula</span>
            </motion.h1>
            <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='mr-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am </span>
              <TypeAnimation
                sequence={['A Web Developer', 2000, 'An AI Researcher', 2000, 'A Tech Enthusiast', 2000]}
                speed={50}
                repeat={Infinity}
                className='text-accent'
                wrapper='span'
              ></TypeAnimation>
            </motion.div>
            <motion.p  variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
            <br></br>✨️ I am currently a sophormore in CSAI at IIITD.<br></br> 🤝 I'm open for collaboration on C++, ML , Javascript and NodeJS <br></br>👩‍🎓 I'm currently learning React.
            </motion.p>
            <motion.div  variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' activeClass='active' spy={true} smooth={true}>
              <button className='btn btn-lg'>Contact Me</button>
              </Link>
              <a href='https://my-portfolio-alpha-five-27.vercel.app/' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div  variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/thatspiyush08'>
                <FaGithub/>
              </a>
              <a href='https://github.com/thatspiyush08'>
                <FaLinkedin/>
              </a>
              <a href='https://www.instagram.com/lostnash_'>
                <FaInstagram/>
              </a>
            </motion.div>
          </div>
          <motion.div  variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
            <img src={Image} style={{ width: '400px', height: '500px', borderRadius: '40%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
