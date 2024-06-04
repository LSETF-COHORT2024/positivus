import React from 'react'
import Button from 'react-bootstrap/Button'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='container justify-content-center align-content-center'>
        <div className="row bg-light p-4 rounded-5 my-5 ">
            <div className="col-8 ">
                <h4 className='pb-3 pt-3'>Lets make things happen</h4>
                <p className='pb-5'> Contact us today to learn more about how our digital <br/> marketing services can help your business grow and <br/> succeed online </p>

                <div className="button">
                <Button variant="dark">Get your free proposal</Button>
                </div>
                
                
            </div>
            <div className="col-4">
                <img src="/images/frame.png" width={350}  alt="" />
            </div>

        </div>
      </div>
      <div className="section ms-5 ps-5">
        <div className='d-flex mx-md-auto mx-sm-auto'>
            <span className='Case'>Case Studies </span>
            <span className='Explore'>Explore Real-Life Examples of Our Proven Digital Markerting <br/>
            Success through our Case Studies
            </span>justify-content-center align-content-center
       </div>
      </div>

      <div className="container justify-content-center align-content-center">
        <div className="row bg-dark p-4 rounded-5 my-5">
            <div className="border-line col-3 pt-5  ">
            <p className='pb-5 text-white'> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>

            </div>

            <div className="border-line col-4 pt-5">
            <p className='pb-5 text-white mx-5 me-5 '> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>

            </div>
            

            <div className=" col-5 pt-5">
            <p className='pb-5 text-white ms-5'> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>

            </div>

        </div>


      </div>




    </>
  )
}

export default Hero
