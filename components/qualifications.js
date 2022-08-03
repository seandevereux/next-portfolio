import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

export class qualifications extends Component {
  render() {
    return (
      <> 
      <section className="course" id="courseSection">
        
        <h1 >Qualifications & References</h1>
        <p></p>

        <div className = "row">
          <div className = "course-col">
            <h3>GTI QQI Level 5</h3>
            <h6>September 2018 to June 2018</h6>
            <p>This course helped me learn the fundamentals of object oriented programming and was majorly how I was introduced to programming,
              art and design concepts. In this course I gained great knowledge on how to organise, be productive and work efficiently in a group.
              I learned a lot about programming which quickly became my hobby, While the design aspect of games development brought me great knowledge on color schemes,
              drawing and object modelling.</p>
            <span> Click <a href="images/results.png">Here</a> To see my results</span>
          </div>
          <div className="blog-right">
            <h3>Experience</h3>
              <div>
                <span>Native Web languages</span>
                <p>100</p>
              </div>
              <div>
                <span>C#, Unity & Games Development</span>
                <p>100</p>
              </div>
              <div>
                <span>React.js / Next.js</span>
                <p>100</p>
              </div>
              <div>
                <span>Tailwind CSS</span>
                <p>100</p>
              </div>
              <div>
                <span>Art</span>
                <p>80</p>
              </div>
          </div>
          <div className="testimonials-col review">
            
            <img src="images/user1.jpg"/>
            <div>
              <p>I worked alongside Sean in college & on various personal projects, as a colleague Sean was great at communication & teamwork, he has great efficiency and a fantastic work rate. One of seans best traits is that he has fantastic problem-solving skills. Definitely someone who I would happily work with again. </p>
              <h3>Luke Nallen</h3>
              <FontAwesomeIcon className='white' icon={faStar}/>
              <FontAwesomeIcon className='white' icon={faStar}/>
              <FontAwesomeIcon className='white' icon={faStar}/>
              <FontAwesomeIcon className='white' icon={faStar}/>
              <FontAwesomeIcon className='white' icon={faStarHalfStroke}/>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default qualifications