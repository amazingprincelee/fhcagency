import React from 'react';
import aboutImage from '../../images/ourfacility.jpeg';

function OF() {
  return (
    <div className='mb-5'>
      <header>
        <h1 className='page-title'>Our Facilites</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>Our Facilites</h1>
            <p>Faith Home Care accommodation is a welcoming, friendly and comfortable place where residents can add their own personal touch. You will find it equipped with all you need to settle in and enjoy living as independently as possible.</p>
            <h1>KEY FEATURES INCLUDE:</h1>
            <p>• Central heating throughout
• Modern, fully fitted and equipped kitchens
• All the modern convenient appliances you would expect, like washing machine, dryer, microwave, etc.
• Fully alarmed and secured entrances and exits
• Friendly care staff on site 24 hours, seven day a week
• Assisted bathroom, so you feel safe
• Lounge and dining room
• Landscaped garden where you can relax and talk with other residents, staff and visitors
• Sensory room
• Wi-Fi internet connection</p>
            
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OF
