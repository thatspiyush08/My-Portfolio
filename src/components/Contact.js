import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          toEmail: 'piyush22354@iiitd.ac.in',
          subject: 'New Message from Website'
        })
      });
      if (response.ok) {
        alert('Email sent successfully!');
        // Clear form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Still Working on this Feature Thanks For Your Patience!!\nYou may mail to piyush22354@iiitd.ac.in for now!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Still Working on this Feature Thanks For Your Patience!!\nYou may mail to piyush22354@iiitd.ac.in for now!');
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='etxt-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!!</h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
          focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
          focus:border-accent transition-all'
              type='email'
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className=' bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
            <button type='submit' className='btn btn-lg'>Send Message</button>
          </motion.form>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;
