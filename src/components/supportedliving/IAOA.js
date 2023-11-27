import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function IAOA() {
  return (
    <div className='mb-5 justina'>
      <header>
        <h1 className='page-title'>Indoor and Outdoor Activities</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
 <h1>Indoor and Outdoor Activities</h1>         
At Faith Home Care, residents can enjoy a wide range of indoor and outdoor activities, such as:

• Painting, art and crafts
• Cooking and baking
• Music therapy
• Cinema
• Shopping
• Park and farm visits
• Seaside trips
• Gardening
• Horse riding
• Swimming
• Cycling
• Dine out
• Meeting the cultural and religious needs
• Activities of own choice
            
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default IAOA;
