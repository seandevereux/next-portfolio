import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import Course from '../components/qualifications';
import About from '../components/about';
import HeadPage from '../components/header';
import HeadWave from '../components/headerWave';
import AboutWave from '../components/aboutWave';
import {useEffect} from 'react';

export default function Home() {

  const linktoreview = "https://www.chicken.com/";

  var review;
  var links;
  var navLinks;
  var showicon;
  var hideicon

  var getDocuments = function () {
    links = document.querySelectorAll('.scroll-to');
    review = document.querySelector('.testimonials-col');
    navLinks = document.getElementById('navLinks');
    showicon = document.getElementById('showicon');
    hideicon = document.getElementById('hideicon');

  }
  

  var myScrollFunc = function() {
    const navEle = document.getElementById("navID");
    var y = window.scrollY;
    if (y >= 100) {
      navEle.classList.add("sticky");
    } else {
      navEle.classList.remove("sticky");
    }
  };

  useEffect(() => { 
    
  var passive =window.addEventListener("scroll", myScrollFunc);
  
  getDocuments();

  review.addEventListener("click", () => {
    location.href = linktoreview;
  });

  if(showicon === null)
  {
    return;
  } else {
    showicon.addEventListener("click", () => {
      if(!(navLinks.classList.contains('mobileNavRight')))
      {
        navLinks.classList.add('mobileNavRight');
      }
  });
}
if(hideicon === null)
{
    console.log("click");
    return;
  } else {
  
    hideicon.addEventListener("click", () => {
      console.log("clicky");
      if(navLinks.classList.contains('mobileNavRight'))
      {
        navLinks.classList.remove('mobileNavRight');
      }
  });
}


  links.forEach((item) => {
    item.addEventListener("click", () => {
        const elem = document.getElementById(item.getAttribute("data-link"));
        elem.scrollIntoView({behavior:"smooth", block:"center"})
    })
  });

  });

  return (
    <div>
      <title> Sean Devereux - Portfolio Home </title>
      <HeadPage/>
      <HeadWave/>

      <About/>
      <AboutWave/>

      <Course/>
      <section className="testimonials" id="testimonialsSection">
      </section>

      <Carousel className='carousel'/> 

      <Footer/>
    </div>
  )
}
