import React, { StrictMode } from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe our channel to watch LIVE gameplay.
                </p>
                <p className='footer-subscription-text'>
                    Join as a member a get more benefits.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' 
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>
                            SUBSCRIBE
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>ABOUT US</h2>
                        <Link to='/subscribe'></Link>
                        <Link to='/'>Channel</Link>
                        <Link to='/'>PC Configurations </Link>
                        <Link to='/'>Sponsers</Link>
                        <Link to='/'>E-Sports</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>CONTACT US</h2>
                        <Link to='/squad'>To be a part of us</Link>
                        <Link to='/'>For Sponsership</Link>
                        <Link to='/'>New PC Builiding </Link>
                        <Link to='/'>Miniatures</Link>    
                    </div>
                </div> 
                <div className='footer-link-wrapper'> 
                    <div className='footer-link-items'>
                        <h2>VIDEOS</h2>
                        <Link to='/subscribe'></Link>
                        <Link to='/'>Gameplay</Link>
                        <Link to='/'>Startegies</Link>
                        <Link to='/'>Tips & Tricks</Link>
                        <Link to='/'>How to buy UC</Link>
                    </div>  
                    <div className='footer-link-items'>
                        <h2>FOLLOW-US</h2>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>    
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            WRATH <i className='fas fa-gamepad'/>
                        </Link>     
                    </div>
                    <small className='website-rights'>WRATH <i className='far fa-copyright'/> 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aris-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aris-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aris-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aris-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer