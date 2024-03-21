import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
    <div className='container'>
      <div className='content'>
        <div className="hero-wrapper">
          <h1 className="hero-wrapper-title">
            <span>Hello. I'm Bekastan!</span>
            <span className="subtitle">A Digital Craftsman.</span>
          </h1>
          <p className="hero-wrapper-description">
            I'm passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.
          </p>
        </div>
        <div className='about'>About</div>
        <p className='bio'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae obcaecati facere eum eos dolorem tenetur aliquid voluptas eligendi doloremque, quos, veritatis sunt! Neque perspiciatis dolorum quam maiores eveniet iste minima similique dolorem, laborum doloribus debitis non consectetur! Saepe ullam dolore, explicabo laborum quo in repellendus, porro impedit fugiat nesciunt tenetur officiis necessitatibus expedita ratione maiores voluptates magnam. Illum deserunt molestiae inventore reiciendis. Nesciunt consectetur pariatur reiciendis. Hic ut modi odio aliquid deserunt autem? Itaque ducimus modi provident aut? Molestiae.
        </p>
      </div>    
      <div className="skillset">
        <span className='about'>Skillset</span>
        <div className='skills'>
          <div className='box'>React</div>
          <div className='box'>JavaSript</div>
          <div className='box'>Next.js</div>
          <div className='box'>TypeScript</div>
          <div className='box'>HTML</div>
          <div className='box'>CSS</div>
          <div className='box'>Sass</div>
          <div className='box'>Material-UI</div>
          <div className='box'>Git</div>
          <div className='box'>Styled-Components</div>
          <div className='box'>Postman</div>
          <div className='box'>Mongo-DB</div>
          <div className='box'>Nest.js</div>
          <div className='box'>Tailwind</div>
          <div className='box'>Java</div>
          <div className='box'>Python</div>
          <div className='box'>Django</div>
          <div className='box'>Docker</div>
          <div className='box'>PHP</div>
          <div className='box'>Redux</div>
          <div className='box'>Redux-toolkit</div>
          <div className='box'>Canva</div>
          <div className='box'>Typing</div>
        </div>
      </div>
      <div className="experience">
        <span className='about'>Experience</span>
        <div className="texts">
          <div className="date"><span>Sep 2023 - Feb 2024</span></div>
          <div className="con_text">
            <span className='title_txt'>Viind GmbH - Fullstack Developer</span>
            <p className='bio'>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.</p>
            <div className="skills">
              <div className='box2'>React</div>
              <div className='box2'>JavaSript</div>
              <div className='box2'>Next.js</div>
              <div className='box2'>TypeScript</div>
              <div className='box2'>HTML</div>
              <div className='box2'>CSS</div>
              <div className='box2'>Java</div>
              <div className='box2'>Python</div>
              <div className='box2'>Django</div>
              <div className='box2'>Docker</div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <span className='about'>Projects</span>
        <div className="items">
          <div className="item">
            <div className='title'>
                        <div className="icons"><a target='_blank' href="https://github.com/nasirovx/TheCocktailDB"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a target='_blank' href="http://the-cocktail-db-five.vercel.app"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></div><span className='top'>theCoctailDB</span></div>
            <div className='skl'>
              <span>React</span>
              <span>Axios</span>
              <span>Redux</span>
              <span>API</span>
            </div>
          </div>
          <div className="item">
            <div className="title">
                     <div className="icons"><a target='_blank' href="https://github.com/nasirovx/TheMealDB"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a target='_blank' href="http://the-meal-db-five.vercel.app"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></div> <span className='top'>theMealDB</span>  </div>
            <div className='skl'>
              <span>React</span>
              <span>Axios</span>
              <span>UI/UX</span>
              <span>Redux</span>
              <span>API</span>
            </div>
          </div>
          <div className="item">
            <div className="title">
                       <div className="icons"><a target='_blank' href="https://github.com/nasirovx/emoji-game"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a target='_blank' href="http://emoji-game-gamma.vercel.app"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></div><span className='top'>Tic Tac Emodji</span> </div>
            <div className='skl'>
              <span>Zustand</span>
              <span>React</span>
              <span>Axios</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="item">
            <div className="title">
                      <div className="icons"><a target='_blank' href="https://github.com/nasirovx/stuff"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a target='_blank' href="http://stuff-theta.vercel.app"><svg className='icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></div><span className='top'>Stuff shop</span>  </div>
            <div className='skl'>
              <span>React</span>
              <span>Axios</span>
              <span>UI/UX</span>
              <span>Redux</span>
              <span>API</span>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer"><span>© 2024 5ekastan</span><div class="footer-social"><a href="#"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a href="5ekastannasirov@gmail.com"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a><a href="#"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg></a><a href="https://github.com/nasirovx" target="_blank"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></div></footer>
    </div>
    </div>
  )
}

export default Home
