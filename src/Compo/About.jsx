import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import ceo from './ceo.png'
const About = () => {
  return (
    <div>
        <Nav />
        <section className='aboutSection'>

            <div className='mission'>
                <h2>Mission:</h2>
                <p> Empowering skilled individuals in Africa and beyond by creating a platform that connects customers with talented professionals.</p>
                
                <h2>Vision:</h2>
                <p> To become a leading platform that not only matches customers with skilled talents but also fosters economic empowerment and growth for individuals across Africa and beyond.</p>
                

                <h2>Core Focus:</h2>
                <p> Creve is dedicated to providing a platform that facilitates the hiring of skilled professionals, making it easier for customers to find and work with talented individuals in various fields.</p>
            </div>


            <div className='objective'>
                <h2 className='obj'>Key Objectives:</h2>
                <p><b>Connecting Talent:</b> Creve aims to bridge the gap between skilled professionals and customers, making it convenient for both parties to connect and collaborate.</p>
                <p><b>Economic Empowerment:</b> By empowering skilled individuals, Creve contributes to economic growth by helping professionals showcase their talents and find opportunities.</p>
                <p><b>Expanding Reach:</b> Creve's vision extends beyond geographical boundaries, with a goal to impact the lives of skilled people not only in Africa but also across the world.</p>
                <p><b>Quality and Reliability:</b> The platform is committed to maintaining high standards of quality and reliability to ensure that customers can trust the talents they hire through Creve.</p>
                <p>
                    <b>Innovation:</b> Creve seeks to leverage innovative technology and approaches to enhance the hiring and collaboration experience for both customers and talents.
                    By focusing on these objectives, Creve aims to make a significant impact by empowering skilled individuals and facilitating meaningful connections in the world of work.
                </p>
            </div>


            <div className="ourTeam">
                <div className='ourTeamEach'>
                    <img src={ceo} alt="" />
                    <h3>Bright C. Philip</h3>
                    <p>CEO/Co-Founder</p>
                </div>

                <div className='ourTeamEach'>
                    <img src={ceo} alt="" />
                    <h3>Richard Kenneth</h3>
                    <p>COO/Co-Founder</p>
                </div>

                <div className='ourTeamEach'>
                    <img src={ceo} alt="" />
                    <h3>Emeka Ewa</h3>
                    <p>Lead Developer</p>
                </div>
            </div>


            <section className='goalnew'>
            <div>
                <h2>
                Empowering skilled individuals in Africa and beyond by creating a platform that connects customers with talented professionals.
                </h2>
                <Link to={'https://chat.whatsapp.com/KuOjvDVM1bfJLXBZYftDpK'}><button>Join Wait List</button></Link>
            </div>
        </section>

            <section>
                <div className='icons'> 
                    <i class="uil uil-twitter"></i>
                    <i class="uil uil-instagram"></i>
                    <i class="uil uil-whatsapp"></i>
                </div>
            </section>

        </section>
    </div>
    
  )
}

export default About