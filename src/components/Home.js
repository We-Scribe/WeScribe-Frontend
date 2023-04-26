import React from 'react'
import logo from '../assets/scribe.svg';
import '../static/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <section className="main_banner">
           <img className="main_banner_logo" src = {logo} />
           <div className ="main_banner_text">
           We are a part of a community of developers run by the students of IIIT Bangalore <br />
           This app is built to help students collaborate with much ease and at the same time be productive.
           </div>
        </section>
    )
}
export default Home;