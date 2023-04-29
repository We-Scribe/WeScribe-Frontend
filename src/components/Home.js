import React from 'react'
import logo from '../assets/index.svg';
import '../static/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div class="customContainer">
          <div class="container px-4">
            <div class="row flex-lg-row-reverse align-items-left g-5">
            
            <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://mdbootstrap.com/img/illustrations/graphics(2).png" class="d-block mt-n5 mx-5 img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"></img>
            </div>
            
            <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 text-justify">WeScribe</h1>
            <p class="lead text-justify">This is a platform for collaborative notes writing and sharing while attending live lectures.
                  This app is built to help students collaborate with much ease and at the same time be productive.
                  We have a discord bot too for students!! Join our server now.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/WeScribe-Frontend/board" type="button" class="btn btn-primary btn-lg px-4 me-md-2">Get Started</a>
            </div>
            
            </div>

            </div>
          </div>
        </div>
    )
}
export default Home;