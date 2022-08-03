import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faTwitter, social } from '@fortawesome/free-brands-svg-icons'

export class footer extends Component {
  render() {
    return (
      <> 
      {/* This is the wave above the footer */}
      <div className="custom-shape-divider-bottom-1657881174">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

    <section className="footer">
        <div className="footerContainer">
            <div className="footerLinks">
                <div className="footerLinkWrapper">
                    <div className="footerLinkItems">
                        <h2>Quick Links</h2>
                        <a href="index.php">Home</a>
                        <a href="about.php">About</a>
                        <a href="projects.php">Projects</a>
                        <a href="contact.php">Contact</a>
                    </div>
                    <div className="footerLinkItems">
                        <h2>About us</h2>
                        <a href="https://github.com/seandevereux/Software-Development" >Software development repository</a>
                        <a href="https://github.com/seandevereux/Games-Development" >Games development repository</a>
                        <a href="https://github.com/seandevereux/Web-Development" >Web development repository</a>
                        <a href="https://github.com/seandevereux" >Github</a>
                    </div>
                </div>
                <div className="footerLinkWrapper">
                    <div className="footerLinkItems">
                    <h2>Where to reach me?</h2>
                        <a href="#">Discord : seanee#7791</a>
                        <a href="https://www.instagram.com/sean3e/" >Instagram</a>
                        <a href="contact.php">Contact Form</a>
                    </div>
                    <div className="footerLinkItems">
                        <h2>Other</h2>
                        <a href="#">Profile (WIP?)</a>
                        <a href="#">Testimonials(WIP?)</a>
                        <a href="#">Career(WIP?)</a>
                        <a href="#">Terms of Service(WIP?)</a>
                    </div>
                </div>
            </div>
            <section className="socialMedia">
                <div className="socialMediaWrapper">
                    <div className="footerLogo">
                        <a href="#" data-link="homeSection" id="footerLogo">Sean Devereux</a>
                    </div>
                        <p className="websiteRights"> Sean Devereux 2022. All rights reserved</p>
                    <div className="socialIcons">
                        <a href="https://twitter.com/SeanDevereux_" ><FontAwesomeIcon className='socialIconLink' icon={faTwitter} alt='twitter'/></a>
                        <a href="https://instagram.com/CreateInstagram" ><FontAwesomeIcon className='socialIconLink' icon={faInstagram} alt='instagram'/></a>
                        {/* <a href="https://facebook.com/CreateFacebook" ><FontAwesomeIcon className='socialIconLink' icon={faFacebook} alt='facebook'/></a> */}
                        <a href="https://Linkedin.com/linkedin" ><FontAwesomeIcon className='socialIconLink' icon={faLinkedin} alt='linkedin'/></a>
                        <a href="https://github.com/seandevereux" ><FontAwesomeIcon className='socialIconLink' icon={faGithub} alt='github'/></a>
                    </div>
                </div>
            </section>
        </div>
    </section> </>
    )
  }
}

export default footer