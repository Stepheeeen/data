import './App.css';

function Hero() {

    return (
        <div className='hero-cont'>
            <div className='hero'>
                <h1>WELCOME USER :)</h1>
                <p>
                    Here at RIDAMSUB, we offer you the most affordable and most cheapest data, airtime, Dstv, Gotv and Startimes subscription. Here is the right place for your Electricity subscription!.
                </p>

                <div>
                    <button className='sign-btn'>Register
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" fill="rgba(37,88,53,1)"></path></svg>
                        </span>
                    </button>
                    <button className='log-btn'>Login
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 14.1364 21.3301 16.1162 20.1889 17.741L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1023 19.1517 17.5398 17.7716L18.5379 19.567C16.7848 21.083 14.4995 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C13.6569 7 15 8.34315 15 10V11H16V16H8V11H9V10C9 8.34315 10.3431 7 12 7ZM14 13H10V14H14V13ZM12 9C11.4872 9 11.0645 9.38604 11.0067 9.88338L11 10V11H13V10C13 9.48716 12.614 9.06449 12.1166 9.00673L12 9Z" fill="rgba(255,255,255,1)"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero