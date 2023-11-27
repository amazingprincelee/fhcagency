import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function OP() {
  return (
    <div claOPName='mb-5'>
      <header>
        <h1 claOPName='page-title'>OP</h1>
      </header>

      <div claOPName='container'>
        <div claOPName='row'>
          <div claOPName='col-lg-6'>
            
            <p>We also offer specialist services to clients who suffer from conditions including multiple sclerosis, severe mental health, alcohol and substance misuse, sensory impairment, HIV and AIDS and acquired brain injury. We will work to the specific needs and desired outcomes and wishes of the client and their family members to help our clients live fulfilling lives and remain independent in their own homes.</p>
            <p>Our Care Managers will ensure the support staff who provide the care are properly trained to deal with the specialist and unique needs of each and every client, allowing us to provide a high level of care and support that can be relied upon. Please don't hesitate to contact your local office to discuOP your care needs today.</p>
            
            <img src={aboutImage} alt='about' claOPName='img-fluid mt-3' />
          </div>

          <div claOPName='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OP;
