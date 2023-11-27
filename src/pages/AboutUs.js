import React from 'react';
import aboutImage from '../images/headerbg.jpeg';

function AboutUs() {
  return (
    <div className='mb-5'>
      <header>
        <h1 className='page-title'>About Us</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>AN OVERVIEW OF THE COMPANY</h2>
            <p>Faith Health Care Agency is a registered company with Registration Number 11088887 whose mission is to be recognized by our clients, service users, and staff as a trusted provider of high quality, efficient, and professional health care staff to contribute to the community by filling the need for excellent and affordable health care.</p>
            <p>Faith Health Care Agency carries out a comprehensive recruitment and onboarding process before sending staff to our client sites. This includes interviewing, reference checks, DBS checks, skills evaluation, screening of all employees, and training.</p>
            <p>We are poised to deliver a tailored care experience, which places our client at the center of everything that we do. Providing them with quality support, which maximizes their life potential whilst allowing them to live an independent and dignified life.</p>
            <p>These and more we do as our clients trust us to place the right staff in the right roles.</p>
            <img src={aboutImage} alt='about' className='img-fluid mt-3' />
          </div>

          <div className='col-lg-6'>
            <h1>Testimonials</h1>
            <p>I would like to thank Faith Health Care for all the help and support they have given us over the last two years. When we have a shift that needs to be filled or in need of agency cover at short notice or in an emergency, Faith Health Care have never failed to find staff to help us out.</p>
            <p>We can call Faith Health Care early in the morning or very late in the evening and there is always someone available on-call to provide us with staff for cover. Their carers are always professional and deliver cares to a very high standard.</p>
            <p>I highly recommend them for short dom care shifts or long day shifts in various social care settings.</p>
            <p className='font-weight-bold'>A. O. <br />
              Complex Care Manager<br />
              Bespoke Health & Social Care</p>
            <p>I highly recommend Faith Health Care Agency for short domiciliary care shifts or long day shifts in various social care sectors.</p>
            <p className='font-weight-bold'>Karen E.
              Manager
              Wentworth Care Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
