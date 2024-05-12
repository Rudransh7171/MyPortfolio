import React from 'react'
import './Header.scss';  
import {AppWrap} from '../../wrapper'
import {motion} from 'framer-motion';
import { images } from '../../constants';
const scaleVariant={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Rudransh</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">I am a versatile software developer skilled in both game and web development. With a passion for immersive experiences, I specialize in creating captivating games across platforms and dynamic web applications. My expertise ranges from integrating engaging gameplay mechanics and optimizing game performance to designing responsive, user-friendly web interfaces. Committed to delivering high-quality solutions, I aim to bring creativity and innovation to every project</p>
          </div>
        </div>

      </motion.div>


      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className="app__header-img"
      >
        <img src={images.img_profilerudra} alt="profile_bg" />
        
        
      </motion.div>


      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.react,images.redux,images.sass].map((circle,index)=>
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />  
           </div>
        )}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header,'home');
