import React, { Component } from 'react'
import Image from 'next/image'

import Flickity from 'react-flickity-component'
const flickityOptions = {
    initialIndex: 0,
    autoplay: true,
    autoplay: 1500
}

export class carousel extends Component {
  render() {
    return (
        <section className='carouselSection' id="projectsSection">
        <h1>My projects</h1>
            <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            >
            

            <article className="card">
                <Image width={1200} height={400} src="/images/hopgame.png" alt='error'/>
                <h3>Hop, A mobile game</h3>
                <p>
                    This game is an endless runner, currently unfinished, I aim to make this project have a similar gameplay loop to subway surfers.
                </p>
            </article>
            <article className="card">
                <Image width={1200} height={400}  src="/images/ecosimgame.png" alt='error'/>
                <h3>Eco, An ecosim game</h3>
                <p>
                    This game was created as i had seen many eco simulations on youtube & i wanted to give developing my own miniature version a go. Over the course of around 1-2 weeks i was able to create a functioning eco system
                    with wolves and rabbits as predator and prey. I learned a lot about the state design pattern & finite state machines and how to manage large quantites of files as a result of using the finite state machine.
                </p>
            </article>
            <article className="card">
                <Image width={1200} height={400} src="/images/jumpgame.png" alt='error' />
                <h3>Jump,</h3>
                <p>
                    My first attempt at a gamejam. this was a great learning experience and was a lot of fun. 
                </p>
            </article>
        </Flickity>
      </section>
    )
  }
}

export default carousel