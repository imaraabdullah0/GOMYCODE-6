import React from 'react';
import './Services.css';
import glasses from '../img/glasses.png';
import heartemoji from '../img/heartemoji.png';
import humble from '../img/humble.png';
import res from '../img/res.png';
import Card from './Card';
import { motion ,} from "framer-motion";


  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };


const Services = () => {
  return (
    <div className='all'>
    <div className='services' id="services">
        <div className='awesome'>
          <span>My Awesome</span>
          <span>Services</span>
          <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
          <a href={res} download>
          <button className="button s-button">Download CV</button>
          </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        </div>

        <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
        <div style={{left:'30rem',top:'7rem'}}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <div style={{top:'12rem',left:'-6rem'}}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
        <div style={{top:'24rem',left:'12rem'}}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Services;