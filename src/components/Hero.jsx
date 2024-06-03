import React from 'react'
import Button from 'react-bootstrap/Button'

const Hero = () => {
  return (
    <>
      <div className='container'>
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




    </>
  )
}

export default Hero
