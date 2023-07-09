import React from 'react'
import {easeIn, motion} from 'framer-motion'

const Slider = () => {
  return (
    <div className='bg-dark text-info'>
        <motion.h6 className='m-0 text-nowrap'
            animate={{x:[1000,-1000]}}
            transition={{
                duration:10,
                delay:2,
                ease:'linear',
                repeat:Infinity
            }}
            whileHover={{scale:1.3}}
        >
            No exercise results in Less efficient Heart, Weak Muscles, Less Sleep, Disrupted Sugar Levels. 
        </motion.h6>
    </div>
  )
}

export default Slider