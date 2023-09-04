import React, {useState, useRef} from 'react'
import './App.css'
import Hero from './hero.jsx'
import About from './about.jsx'
import Service from './service.jsx'
import Price from './pricing.jsx'
import Footer from './footer.jsx'

function App() {
  const [navbar,setNavbar] = useState(true);
  const changeBg = () => {
    if (window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  } 
  window.addEventListener('scroll', changeBg);
  
  const mediaNav = useRef();

  const showNavbar = () => {
    mediaNav.current.classList.toggle("resp_nav")
  }
  return (
    <main>
      <div className={navbar ? 'navbar active' : 'navbar'}>
      <h2>Company Name</h2>

      <nav className='nav-link'ref={mediaNav}>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
            </li>
          <li>
            <a href="#price">Pricing</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>

        <button className='nav-btn close' onClick={showNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="rgba(0,0,0,1)"></path></svg>
        </button>
      </nav>

      <button className="media-nav" onClick={showNavbar} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" ></path></svg>
      </button>

    </div>
    <section id='hero'>
      <Hero />
    </section>
    <section id='about'>
      <About />
    </section>
    <section id='service'>
      <Service />
    </section>
    <section id='price'>
      <Price />
    </section>
    <section id='footer'>
    <Footer />
    </section>
    </main>
    
  )
}

export default App
