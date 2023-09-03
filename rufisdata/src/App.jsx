import './App.css'
import Hero from './hero.jsx'
import About from './about.jsx'
import Service from './service.jsx'
import Price from './pricing.jsx'
import Footer from './footer.jsx'

function App() {

  return (
    <main>
      <div className='navbar'>
      <h2>Company Name</h2>

      <div className='nav-link'>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
            </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </div>

      <div className="media-nav">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path></svg>
      </div>

    </div>
    <section>
      <Hero />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Service />
    </section>
    <section>
      <Price />
    </section>
    <section>
    <Footer />
    </section>
    </main>
    
  )
}

export default App
