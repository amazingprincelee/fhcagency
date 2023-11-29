import React from 'react';


function HomeAbout() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="h-100 p-5 website-red text-white rounded-3">

            <p>
              Faith Care is regulated by CQC (Care Quality Commission) and rated good.
              We are one of the leading supported care providers for adults with the following needs:
            </p>
           <ul className='' style={{fontSize:"1.2rem", fontWeight:"bold"}}>
            <li>Age 0-17</li>
            <li>Physical disabilities</li>
            <li>Learning difficulties and autistic spectrum disorder</li>
           </ul>
           <small>Faith Home Care Provide care and support of the highest standard; Ensuring that our support living is fully compliant with the set regulatory standards. We provide a service that is flexible to each individual, treating every person with dignity and respect. We work in a friendly, relaxed and welcoming environment.</small>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 home-about-photo">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
