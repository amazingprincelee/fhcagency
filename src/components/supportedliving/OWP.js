import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function OWP() {
  return (
    <div className='mb-5'>
      <header>
        <h1 className='page-title'>Our Working Principles</h1>
      </header>

      <div className='container justina'>
        <div className='row'>
          <div className='col-lg-6'>
            <p>OUR PRINCIPLES GUIDE US THE WAY WE WORK. THIS HELPS US TO ENSURE THAT EVERY PERSON WHO COMES UNDER OUR CARE SERVICES GETS THE HIGHEST LEVEL OF SUPPORT
PROMISE AND COMMITMENT</p>
            <p>We always keep in mind what you need, so you will find that our services fit around you. We listen and understand your needs carefully and how you would like us to deliver care. We will support you in making informed decisions that will assist towards your progress of gaining independence.</p>
            <p>We take your feedback and act upon them. We aim to shape and develop our services to make them personalized for the people we serve.
We will ensure to provide you seamless support and delivery in meeting your needs by other professionals, such as social workers, physiotherapists, GP and occupational health professionals.</p>
<p>The person centred care plan is regularly monitored to account for any changes in your needs, choices or requirements. This helps us assess what is working, what is not and what needs to be changed in order to efficiently provide you the care and support you deserve.</p>
            
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OWP
