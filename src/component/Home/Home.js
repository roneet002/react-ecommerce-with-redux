import React from 'react'
import { Link } from 'react-router-dom';
import hpBanner1 from '../../assets/images/hpBanner1.jpg'
import hpBanner from '../../assets/images/dummyBanner.png'


const Home = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={hpBanner1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 px-0 text-primary">Lorem Ipsum is simply dummy text</h1>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <Link to="/Products" className="btn btn-primary btn-lg px-4 me-md-2">Go to Products</Link>
          <Link to="/Products" className="btn btn-outline-secondary btn-lg px-4">Go to Products</Link>
        </div>
      </div>
    </div>
  </div>


  <img src={hpBanner} alt='home page banner' style={{width:'100%'}} />

     
    </div>
  )
}

export default Home
