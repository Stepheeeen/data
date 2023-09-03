import aboutImage from './assets/data-about.png'

function About(){
    return(
        <div className='about'>
            <div className="img">
            <img src="https://ridamsub.com/static/tola/images/hapi.jpeg" alt="" />
            </div>

            <div className="context">
                <span className="top">About Us</span>
                <h1>
                Trusted Data Platform For Users & Resellers
                </h1>
                <p>
                RIDAMSUB is a web platform where users can purchase Mobile Data Bundles, VTU Airtime, Pay Electricity Bills, TV Subscription. We have designed our website to accommodate user needs. Providing users of our platform the opportunity to save cost, make fast, secured, efficient and rewarding purchases and bill payments. Our internet/mobile data plans work with all devices including Android, Iphone, Computers, Modems e.t.c. Data can be rollover if you re-subscribe before expiry date of current plan.
                </p>

                <button className="join">Join Us Now! <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M14 12L10 16V8L14 12Z" fill="rgba(0,0,0,1)"></path></svg></span></button>
            </div>
        </div>
    )
}

export default About