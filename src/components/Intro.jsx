import React from 'react';
import './Intro.css';
import Github from '../img/github.png';
import Instagram from '../img/instagram.png';
import LinkedIn from '../img/linkedin.png';
import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import boy0 from '../img/boy0.png';
import thumbup from '../img/thumbup.png';
import Crown from '../img/crown.png';
import glassesimoji from '../img/glassesimoji.png';
import FloatingDiv from './FloatingDiv';






const Intro = () => {
  return (
    <div className='Intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>hey! I Am</span>
                <span>Abdullah Imara</span>
                <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
            </div>
        <button className='button i-button'>Hire Me</button>
        <div className='i-icons'>
            <a href='https://github.com/imaraabdullah0'><img src={Github} alt='/'/></a>
            <a href='https://www.linkedin.com/in/abdullah-imara-948639241/'><img src={LinkedIn} alt='/'/></a>
            <a href='https://www.instagram.com/abdullah.kh.im/'><img src={Instagram} alt='/'/></a>
        </div>
        </div>
        <div className='i-right'>
        <img src={Vector1} alt='/'/>
        <img src={Vector2} alt='/'/>
        <img style={{maxHeight:'1700px'}} src={boy0} alt='/'/>
        <img src={glassesimoji} alt='/'/>
        
        <div style={{top: '-6rem', left: '40%',minWidth:'180px'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        
        </div>
    </div>
  )
}

export default Intro