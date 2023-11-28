import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Use your EmailJS service, template, and user IDs
    const serviceId = 'your_emailjs_service_id';
    const templateId = 'your_newsletter_template_id';
    const userId = 'your_emailjs_user_id';

    try {
      await emailjs.send(serviceId, templateId, { email }, userId);

      alert('Newsletter subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe to the newsletter. Please try again.');
    }
  };

  return (
    <footer className="container-fluid py-5">
      <div className="container p-5 text-center">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <h4>Sign Up For Our Newsletter</h4>
        <p>Faith Health Care Agency specializes in providing temporary, contract and permanent staff to both the public and private sectors across London.</p>

        <form className="mb-5" onSubmit={handleNewsletterSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control newsletter"
                placeholder="Enter email to receive updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Send</button>
            </div>
          </form>
      </div>
    </div>



      <div className="row">
        <div className="col-12 col-md">
          
          <small className="d-block mb-3  text-white"><b>OFFICE ADDRESS:</b><br/>Faith Health Care Agency Ltd
            Square Root Business Centre <br/>
            102-116 Windmill Road
            Croydon<br/>
            Surrey CR0 2XQ<br/>
            info@fhcagency.co.uk<br/>
            Telephone: 02031373942
            Office Mobile: <br/> 07495162171</small>
            
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><a className="link-secondary text-decoration-none text-white">Cool stuff</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Random feature</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Team feature</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Stuff for developers</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Another one</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="link-secondary text-decoration-none text-white">Resource name</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Resource</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Another resource</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="link-secondary text-decoration-none text-white">Team</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Locations</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Privacy</a></li>
            <li><a className="link-secondary text-decoration-none text-white">Terms</a></li>
          </ul>
        </div>
        <p className=" text-white">copyright© {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
