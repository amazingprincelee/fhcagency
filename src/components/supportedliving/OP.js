import React from 'react';
import aboutImage from '../../images/headerbg.jpeg';

function OP() {
  return (
    <div className='mb-5 justina'>
      <header>
        <h1 className='page-title'>Our Priorities</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>YOUR WELLNESS IS OUR TOP PRIORITY</h1>
            <p>We support residents to gain and maintain their independence. Growth in confidence is gained through access to stimulating activities. Experiencing meaningful contribution to their personal development and sense of achievement. At the same time, we recognize and respect that each individual has a right to progress at their own pace and in a way that is most meaningful to them.</p>
            <h1>LIFE SKILLS PROGRAMME</h1>
            <ul>
              <li>Cooking & meals preparation</li>
              <li>Activities planning</li>
              <li>Household tasks</li>
              <li>Time management</li>
              <li> Road safety</li>
              <li>Shopping</li>
            </ul>
            <h1>EDUCATION</h1>
            <ul>
              <li>Access to libraries</li>
              <li>Activities planning</li>
              <li>Access to local gym</li>
              <li>Walking & trekking groups</li>
              <li>Cycling group</li>
              <li>Working in the community</li>
            </ul>
            <h1>Community</h1>
            <ul>
              <li>Working with local colleges</li>
              <li>Budget and financial planning</li>
              <li> Drama</li>
              <li>Healthy lifestyle</li>
              <li>Art & Craft classes</li>
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

export default OP;
