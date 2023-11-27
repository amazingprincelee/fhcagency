import React from 'react';
import aboutImage from '../../images/whychooseus.jpeg';

function WCU() {
  return (
    <div className='mb-5 justina'>
      <header>
        <h1 className='page-title'>Why Choose Us</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            
            <p>Our care provision endorses a holistic approach which is sensitive to the needs of every resident and encompasses the following essential aspects:</p>
            <ul>
              <li>Privacy</li>
              <li>Dignity</li>
              <li>Independence</li>
              <li>Choice</li>
              <li>Rights</li>
            </ul>
            <h3>RISK MANAGEMENT</h3>
            <p>Each person will have an individual risk assessment. Faith Home Care will strive to provide the best opportunities and choice within this framework - the freedom to try different activities and experiences to help them achieve their full potential.</p>
            <h3>SUPPORTING BEHAVIOURAL NEEDS</h3>
            <p>We will work existing management for strategies and care plans for behavioral needs, which are regularly reviewed. Staff will suppport each person to live their life in the way they wish, enabling access to the community and safety managing any challenging behaviour they may have. We will seek professional help as and when required.</p>
            <h3>DECISION MAKING</h3>
            <p>Our key aim is to support residents to make informed decisions and choices that enable them to take control of their lives and progress towards maximum independence. An approach that includes supporting residents to take an active part in the way their home is run.</p>
            
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WCU;
