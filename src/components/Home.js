import React from 'react'
import logo from '../assets/index.svg';
import '../static/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <section className="main_banner">
            <img className="main_banner_logo" src = {logo} />
            <div className ="main_banner_text">
            This is a platform for colllaborative notes writing and sharing while attending live lectures.
            This app is built to help students collaborate with much ease and at the same time be productive.
            We have a discord bot too for students!! Join our server now.
            </div>
        </section>
    )
}
export default Home;