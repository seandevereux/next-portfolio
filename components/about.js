import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <>
    <section className="about-us" id="aboutSection">
      <h1>About Me</h1>
        <div className="row">
          <div className="about-col">
            <img src="images/about.jpg"/>
          </div>
          <div className="about-col">
            <h2>GTI & further education.</h2>
            <p>I studied at GTI in 2018, I left with 4 distinctions & a level 5 certificate in Digital Media (Games Development). To see the results click <a href="">here</a>. Post GTI I studied Software Development at GMIT (2019) for one year, in this year I had to overcome many personal issues which lead me to deferring the year & education as a whole until now, in my spare time I was constantly working on my knowledge about software and IT as a whole, which lead me to walk down many different paths, I practiced algorithms with leetcode & hackerrank, created many games with unity & blender, created desktop software to challenge myself (desktop social media) which brought me to study and learn many different design patterns, web development, and as a hobby I invested time in learning how to build my own pc. And now in 2022 I plan to return to software development in GMIT or NUIG.</p>
            <a data-link="projectsSection" className="scroll-to hero-btn blue-btn">Projects</a>
          </div>

        </div>
        

      </section>
      </>
    )
  }
}

export default about