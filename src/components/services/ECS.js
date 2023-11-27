import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function ECS() {
  return (
    <div className='mb-5'>
      <header>
        <h1 className='page-title'>Elderly Care Services</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>Elderly Care Services</h2>
            <p>We provide the fulfillment of the special needs and requirements that are unique to senior citizens. We assist with services such as assisted living, adult day care, long term care, nursing homes, hospice care, and home care.
We emphasize the social and personal requirements of senior citizens who need some assistance with daily activities and health care, who desire to age with dignity.</p>
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ECS;
