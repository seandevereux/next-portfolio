import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faList } from '@fortawesome/free-solid-svg-icons'
import {useEffect} from 'react';

export class header extends Component {
  render() {
    return (
      <>
      <title>Sean Devereux</title>
      <section className="header" id="homeSection">
        <nav className="" id="navID">
            <a href="index.php"> <img src = "images/logo.png" alt="IMAGE NOT LOADED"/> </a>
            <div className = "nav-links" id="navLinks">
                <FontAwesomeIcon className='icone hideicon white' id="hideicon" icon={faClose} onClick={useEffect.hideMenu}/>
                <ul>
                    <li> <a data-link="homeSection" className="scroll-to" >HOME</a> </li>
                    <li> <a data-link="aboutSection" className="scroll-to">ABOUT</a> </li>
                    <li> <a data-link="courseSection" className="scroll-to" >QUALIFICATIONS</a> </li>
                    <li> <a data-link="projectsSection" className="scroll-to" >PROJECTS</a> </li>
                </ul>
            </div>
            <FontAwesomeIcon className='icone showicon white' id="showicon" icon={faList} onClick={useEffect.showMenu}/>
        </nav>
            <div className="text-box">
                <h1>SEAN DEVEREUX</h1>
                <p>
                <span>Hello!</span> I am Sean, a multifaceted developer from Galway.  <br/> Outside of programming I like to read, write, play video games & I also enjoy watching UFC & boxing.</p>
                <br/><a data-link="aboutSection" className="scroll-to hero-btn">Click here for more information</a>
            </div> 
        </section>
        </>
    )
  }
}

export default header