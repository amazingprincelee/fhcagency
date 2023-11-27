import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function HWW() {
  return (
    <div className='mb-5 justina'>
      <header>
        <h1 className='page-title'>How We Work</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            
            <h6>STEP 1</h6>
            Referral made to Faith Home Care.
            <h6>STEP 2</h6>
            Date of accessment is agreed to visit the prospective's residence
            <h6>STEP 3</h6>
            Decisin taken over whether Faith Home Care is the right placement for the client
            <h6>STEP 4</h6>
            Initial care and support plan drawn for appropriate funding
            <h6>STEP 5</h6>
            Agreement riched between all parties, contract is finalized and transition plan commenses 

            <h2>WE RECEIVE REFERRALS ON A CASE-BY-CASE BASIS FROM A RANGE OF SOURCES SUCH AS:</h2>
            <ul>
              <li>Social Services</li>
              <li>Transition to adulthood services</li>
              <li>Emergency placement</li>
              <li>Broken down placement</li>
              <li>Families</li>
            </ul>

            
            
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HWW
