import React from 'react'

// import { Link } from 'react-router-dom'

import { Link } from 'react-router-dom'
import hand from './hand.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'


import Nav from './Nav'


// import


const Home = () => {
  return (
    <div>
        <Nav />
        <section className='homeSection'>
            <div>
                <h2>Discover Best <br /> <span>Talents Around</span></h2>
                <h3>Explore and Hire best talents around you and across Africa.</h3>
                <p> Empowering skilled individuals in Africa and beyond by creating a platform that connects customers with talented professionals.</p>
                <Link to={'https://chat.whatsapp.com/KuOjvDVM1bfJLXBZYftDpK'}><button>Join Wait List</button></Link>
                
            </div>

            <div className='handSec'>
                <img src={hand} alt="" />
            </div>
        </section>


        <section className='howWorkSec'> 
            <h1>How does it work?</h1>
            <div className='howWorkDiv'>
                <div className='howWork'>
                    <img src={img1} alt="" />
                    <div>
                        <h2>Choose perfect talent</h2>
                        <p>Browse talent profiles. Compare bio and select the best one.</p>
                    </div>
                </div>

                <div className='howWork'>
                    <img src={img2} alt="" />
                    <div>
                        <h2> Drop a required message</h2>
                        <p>
                            Simply drop a project or contest for what you need done and you 
                            will recieve reply within minutes. and work will be done.
                        </p>
                    </div>
                </div>

                <div className='howWork'>
                    <img src={img3} alt="" />
                    <div>
                        <h2> Pay when you’re satisfied</h2>
                        <p>
                            Pay securely using our Milestone Payment system. Release payments when it 
                            has been completed and you're 100% satisfied.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='goal'>
            <div>
                <h2>
                Empowering skilled individuals in Africa and beyond by creating a platform that connects customers with talented professionals.
                </h2>
                <Link to={'https://chat.whatsapp.com/KuOjvDVM1bfJLXBZYftDpK'}><button>Join Wait List</button></Link>
            </div>
        </section>


        <section>
            <div className='icons'> 
                <Link to={'https://twitter.com/creveafrica'}><i class="uil uil-twitter"></i></Link>
                <i class="uil uil-instagram"></i>
                <Link to={'https://chat.whatsapp.com/KuOjvDVM1bfJLXBZYftDpK'}><i class="uil uil-whatsapp"></i></Link>
                
            </div>
        </section>
    </div>
  )
}

export default Home