import { useState, useEffect } from 'react';
import Header from './Header';
import Avatar from './assets/images/Avatar2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "./assets/Resume.pdf";
import webCreationDark from './assets/images/webcreateDark.svg';
import webCreationLight from './assets/images/webcreateLight.svg';
import webHostingDark from './assets/images/hostingDark.svg';
import webHostingLight from './assets/images/hostingLight.svg';
import webManagerDark from './assets/images/webmanagementDark.svg';
import webManagerLight from './assets/images/webmanagementLight.svg';
import socialMediaDark from './assets/images/mediaDark.svg';
import socialMediaLight from './assets/images/mediaLight.svg';
import graphicsDark from './assets/images/graphicsDark.svg';
import graphicsLight from './assets/images/graphicsLight.svg';
import ipPreview from './assets/images/ipTracker.jpg';
import notificationPreview from './assets/images/notification.jpg';
import restCountryPreview from './assets/images/restCountry.jpg';
import weatherPreview from './assets/images/weather1.jpg';
import blogPreview from './assets/images/Gblog1.jpg';
import calculatorPreview from './assets/images/calculator.jpg';
import cwPreview from './assets/images/CW24.jpg';
import gitHub from './assets/images/GithubCut.png';
import telegram from './assets/images/telegramCut.png';
import LinkedIn from './assets/images/linkedinCut.png';

function App() {
  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState()

  useEffect(
    () => {
      AOS.init({
        duration: 1500,
        once: true
      })
    }
  )

  return (
    <div className={`h-full
                    ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div data-aos="fade-up" className={`Introduction md:flex justify-between items-center lg:px-20 md:px-15 px-5 md:py-7 py-13`}>
        <div className='statement-DM'>
          <h1 data-aos='fade-right' className={`Statement lg:text-6xl md:text-4xl text-xl md:my-0 mb-10 md:text-left text-center font-semibold line-height-10
                      ${darkMode ? "text-white" : "text-gray-900"}`}>Hello<span className={`md:text-7xl text-3xl ${darkMode ? "text-blue-300" : "text-green-700"}`}>,</span> <br />I'm <span className={`font-bold lg:text-7xl md:text-5xl text-3xl
                                                                                                      ${darkMode ? "text-blue-300" : "text-green-700"}`}>Emmanuel</span>
                      <br /> React.js Developer</h1>
          <div className={`DM md:absolute bottom-25 text-center md:mb-0 mb-10`}>
            <a href="https://wa.me/qr/PONKW5O247VKL1" className={`flext font-bold text-lg duration-600 px-8 py-2 rounded-xl shadow-full  md:border-3 border-1 shadow-md
                                  ${darkMode ? "text-blue-300 hover:bg-blue-400 border-blue-400 hover:text-white shadow-gray-400" : "text-green-700 hover:bg-green-700 border-green-700 hover:text-white shadow-gray-900"}`}>
              Direct Message
            </a>
          </div>
        </div>
        <div className='Image-resume'>
          <div data-aos="fade-left" className={`Avartar flex justify-center`}>
            <img src={Avatar} alt="" className={`w-100 h-130 shadow-2xl cursor-pointer rounded-full border-2
                                              inline-block transition-transform transform duration-500 ease-in-out hover:-translate-x-2
                                              hover:shadow-none
                                            ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`} />
          </div>
          <div className={`Resume flex justify-center py-15`}>
            <a href={resume} type='document' className={`font-bold text-xl duration-600 px-8 py-2 rounded-xl shadow-md
                                          hover:bg-transparent hover:border-3
                                          ${darkMode ? "text-white bg-blue-400 border-blue-300 hover:text-blue-300 shadow-gray-400" : "text-white bg-green-700 border-green-700 hover:text-green-700 shadow-gray-900"}`}>My Resume</a>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className='Skills'>
        <ul className={`Skills md:flex grid grid-cols-3 justify-between lg:px-20 md:px-15 px-5 md:gap-10 gap-2 font-bold md:text-xl text-small
                        py-2 border-y-1
                        ${darkMode ? "bg-gray-800 border-blue-300 text-gray-400 " : "border-green-700 bg-gray-200 text-gray-500"}`}>
          <li>HTML</li>
          <li>CSS</li>
          <li>TAILWIND CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>GITHUB</li>
        </ul>
      </div>
      <div data-aos="fade-up" className={`Infomation flex md:flex-row flex-col-reverse justify-between lg:px-20 md:px-15 px-5 pt-20`}>
        <section data-aos='fade-right' className='Services'>
          <div className={`flex items-center lg:gap-15 md:gap-10 justify-between mb-5
                            border-l-2 lg:px-10 md:px-6 px-4 
                            ${darkMode ? "border-blue-300" : "border-green-700"}`}>
            <img className={`w-15`} src={darkMode ? webCreationLight : webCreationDark } alt="" />
            <p className={`lg:text-lg text-base font-semibold cursor-pointer transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Website Development</p>
          </div>
          <div className={`flex items-center lg:gap-15 md:gap-10 justify-between mb-5 border-l-2 lg:px-10 md:px-6  px-4
                            ${darkMode ? "border-blue-300" : "border-green-700"}`}>
            <img className={`w-15`} src={darkMode ? webHostingLight : webHostingDark } alt="" />
            <p className={`lg:text-lg text-base font-semibold cursor-pointer transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Website Hosting</p>
          </div>
          <div className={`flex items-center lg:gap-15 md:gap-10 justify-between mb-5 border-l-2 lg:px-10 md:px-6  px-4
                            ${darkMode ? "border-blue-300" : "border-green-700"}`}>
            <img className={`w-15`} src={darkMode ? webManagerLight : webManagerDark } alt="" />
            <p className={`lg:text-lg text-base font-semibold cursor-pointer transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Website Manager</p>
          </div>
          <div className={`flex items-center lg:gap-15 md:gap-10 justify-between mb-5 border-l-2 lg:px-10 md:px-6  px-4 
                            ${darkMode ? "border-blue-300" : "border-green-700"}`}>
            <img className={`w-15`} src={darkMode ? socialMediaLight : socialMediaDark } alt="" />
            <p className={`lg:text-lg text-base font-semibold cursor-pointer transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Social Media Manager</p>
          </div>
          <div className={`flex items-center lg:gap-15 md:gap-10 justify-between mb-5 border-l-2 lg:px-10 md:px-6  px-4
                            ${darkMode ? "border-blue-300" : "border-green-700"}`}>
            <img className={`w-15`} src={darkMode ? graphicsLight : graphicsDark} alt="" />
            <p className={`lg:text-lg text-base font-semibold cursor-pointer transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Graphics Designer</p>
          </div>
          <div data-aos='fade-right' className='Contact infomation'>
            <h1 className={`font-bold md:text-3xl my-5 text-lg transition-transform
                            transform duration-700 ease-in-out hover:translate-x-5 
                            ${darkMode ? 'text-blue-300' : 'text-green-700'}`}>Contact Me</h1>
            <div className='numbers font-semibold text-lg'>
              <p className={`transition-transform transform duration-700 ease-in-out hover:translate-x-5`}>+234 906 514 7422</p>
              <p className={`transition-transform transform duration-700 ease-in-out hover:translate-x-5`}>+234 808 865 6706</p>
            </div>
            <p className='email font-semibold text-lg mt-5 transition-transform transform duration-700 ease-in-out hover:translate-x-5'>
              <strong>Email -</strong> 
              <a href="emmanuelodior18@gmail.com" type='@email'>emmanuelodior18@gmail.com</a>
            </p>
          </div>
        </section>
        <section data-aos="fade-left" className={`About md:w-120 w-full text-center mb-10 md:m-0 m-auto`}> 
            <h1 className={`text-4xl font-semibold mb-7 transition-transform
                            transform duration-700 ease-in-out hover:scale-110 
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>About Me</h1>
            <p className={`text-lg text-left`}>Hi, i'm a Frontend Developer passionate about turning ideas into responsive, 
                                    user-friendly, and visually engaging websites. My core stack includes <span className={`font-semibold`}>HTML, CSS, 
                                    JavaScript, and React</span>, and I enjoy building clean, functional interfaces that 
                                    don’t just work, but feel right for the user.
                                  <p className='my-1'>Beyond writing code, I bring creativity from my background in branding 
                                    and digital marketing which means I understand not just how to build, but also how to design for real world impact.</p> 
                                  <p className='mb-1'>When I’m not coding, you’ll probably find me exploring design tools, learning 
                                    new tech trends, or challenging myself with side projects (my way of mixing 
                                    fun with growth 🚀). </p>  I’m currently open to junior developer roles, 
                                    internships, or freelance projects, where I can contribute, grow, 
                                    and keep sharpening my craft.</p>
        </section>
      </div>
      <div className={`Projects text-center lg:px-20 md:px-15 px-5 py-10`}>
        <h1 className={`text-4xl font-semibold mb-15 transition-transform
                            transform duration-700 ease-in-out hover:scale-110 
                          ${darkMode ? "text-blue-300" : "text-green-700"}`}>Projects</h1>
        <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-15 mt-10 justify-items-center `}>
          <div data-aos='fade-up' className='Ip Address'>
            <div className={`lg:h-110 shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`} src={ipPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://ip-address-tracker-roan-ten.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                                  transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>IP Address Tracker</h4>
                  <p>Built with <span className={`font-semibold`}>React.js</span> and <span className={`font-semibold`}>Tailwind CSS</span> 
                      this project intergrate public APIs to fetch and display locations details in real time </p>
                </a>
              </div>                
            </div>
          </div>
          <div data-aos='fade-up' className='Weather'>
            <div className={`shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={weatherPreview } alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://weather-app-indol-pi.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>Weather APP</h4>
                  <p>A responsive weather site built with <span className={`font-semibold`}>React.js</span> and <span className={`font-semibold`}>Tailwind CSS</span>, using
                      a public API to provide real-time forecasts in Celsius</p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='G-blog'>
            <div className={`lg:h-140 shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={blogPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://g-blog-sigma.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>G-Blog</h4>
                  <p>A responsive blogging platform built with <span className={`font-semibold`}>React.js</span> and <span className={`font-semibold`}>Tailwind CSS</span>, designed for user to easily share updates, read previous post 
                   (even if it's not english), edit and delete post while engaging with content </p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='Rest-Country'>
            <div className={`lg:h-135 shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={restCountryPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://rest-countries-eight-plum.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>Rest Country</h4>
                  <p>I worked with React components and integrated a dummy API to build this project, using <span className={`font-semibold`}>React.js and Tailwind CSS</span>.</p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='Age-Calculator'>
            <div className={`shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={calculatorPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://age-calculator-one-pi.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>Age Calculator</h4>
                  <p>I explored working with numbers to strengthen my JavaScript skills and built this project using pure <span className={`font-semibold`}>JavaScript, CSS, and HTML</span>.</p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='Notifications'>
            <div className={`shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={notificationPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://notifications-page-main-three-ivory.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>Notification Page</h4>
                  <p>A simple notification page that helps users easily view and manage alerts, built using pure <span className={`font-semibold`}>HTML, CSS, and JavaScript</span>.</p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' className='CW24'>
            <div className={`lg:h-120 shadow-2xl rounded-t-3xl hover:shadow-none duration-600
                            transition-transform transform hover:-translate-y-10 ease-in-out border-2
                          ${darkMode ? "shadow-gray-400 border-gray-900" : "shadow-black border-white"}`}>
              <img className={`w-150 rounded-t-3xl`}  src={cwPreview} alt="" />
              <div className={`my-10 px-5`}>
                <a href="https://cw-24-emmanuels-projects-f0e9c169.vercel.app/">
                  <h4 className={`font-semibold text-xl mb-3  duration-600 
                            transition-transform transform hover:-translate-y-2 ease-in-out
                                ${darkMode ? "text-blue-300" : "text-green-700"}`}>CW24</h4>
                  <p>A responsive medical website designed for CW24 to provide users with easy access to healthcare information and services. The project was built entirely with <span className={`font-semibold`}>HTML and CSS</span>.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={`flex justify-between items-center sticky bottom-0 py-3 lg:px-20 md:px-15 px-5
                          ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
        <ul className={`Socials-Icons flex md:space-x-7 space-x-2`}>
          <li>
            <a href="https://www.linkedin.com/in/emmanuel-odior-a77037278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img className={`w-5`} src={LinkedIn} alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Greyholdyngs">
              <img className={`w-5`} src={gitHub} alt="" />
            </a>
          </li>
          <li>
            <a href="https://t.me/Greyholdyngs">
              <img className={`w-5`} src={telegram} alt="" />
            </a>
          </li>
        </ul>
        <h1 className={`font-bold md:text-xl text-base ${darkMode ? 'text-blue-300' : 'text-green-700'}`}>Emmanuel Odior</h1>
      </footer>
    </div>
  )
}

export default App
