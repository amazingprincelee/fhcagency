import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function DCS() {
  return (
    <div className='mb-5'>
      <header>
        <h1 className='page-title'>Domiciliary Care Services</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <p>Choose our flexible domiciliary care services, anything from check-in visit to personal care. We can offer short term help (following an illness or because your usual career is having a break), or long-term home care and support. Our dedicated team of home care assistants are fully trained to:
Assist with "good morning" start to the day, helping you to get up, wash, shower or bath, dress and have breakfast.
Remind or assist you to take your medicines.
Prepare meals with or for you and assist you at meal times</p>
          
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default DCS;
