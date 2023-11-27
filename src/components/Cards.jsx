import React from 'react'

function Cards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">OUR VISION</h3>
                                <p>Our vision is to be the global trusted provider of efficient and high quality professional health care contributing to the community by filling and meeting the need for excellent and affordable health care.</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">OUR MISSION</h3>
                                <p className='text-center'>Our mission is to deliver a tailored care experience, which places our service users at the centre of everything that we do and providing them with quality support, which maximizes their life potential whilst allowing them to live an independent and dignified life.</p>
                              
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">OUR CLIENTS</h3>
                                <p>At Faith Health Care, we ensure that the staff we hire are fully trained, qualified, and available through a 24/7 on-call service in order to meet the expectations of our clients and service users.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Cards