import React from 'react'
import Button from 'react-bootstrap/Button'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <>
      <div className='container justify-content-center align-content-center'>
        <div className="row bg-light p-4 rounded-5 my-5 ">
            <div className="col-lg-8 col-md-5 col-sm-5">
                <h4 className='pb-3 pt-3'>Lets make things happen</h4>
                <p className='pb-5'> Contact us today to learn more about how our digital <br/> marketing services can help your business grow and <br/> succeed online </p>

                <div className="button">
                <Button variant="dark">Get your free proposal</Button>
                </div>
                
                
            </div>
            <div className=" img col-lg-4 mx-md-auto mx-sm-auto  m-3 col-md-6 col-sm-6">
                <img src="/images/frame.png" width={350}  alt="" />
            </div>

        </div>
      </div>
      <div className="section">
        <div className='d-lg-flex  justify-content-lg-start'>
            <span className='Case '>Case Studies</span>
            <span className='Explore '>Explore Real-Life Examples of Our Proven Digital Markerting <br className='hidden-br' /> Success through our Case Studies
            </span>
       </div>
      </div>

      <div className="container justify-content-center align-content-center">
        <div className="row bg-dark  p-4 d-flex justify-content-centern rounded-5 mt-5">
            <div className=" col pt-5 ">
            <p className='pb-5 text-white'> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>
           <p className='Learn'>
            <a href="#">Learn more</a>
            <span className='icon ms-2 '><img src="/images/Arrow.png" width={15} alt="" /> </span>
          </p>

            </div>

            <div className="border-line col pt-5">
            <p className='pb-5 text-white mx-5 me-5 '> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>
           <p className='Learn ms-4'>
            <a href="#">Learn more</a>
            <span className='icon ms-2'><img src="/images/Arrow.png" width={15} alt="" /> </span>
          </p>

            </div>
            

            <div className="local col pt-5">
            <p className='pb-5 text-white ms-5'> For a local restaurant we <br/>
            implemented a targeted PPC <br/>
           campaign that resulted in 50% <br/> increase in website traffic and a <br/>
           25% increase in sales </p>
          
          <p className='Learn ms-4 '>
            <a href="#">Learn more</a>
            <span className='icon ms-2'><img src="/images/Arrow.png" width={15} alt="" /></span>
          </p>
          
            </div>

        </div>


      </div>




    </>
  )
}

export default Hero