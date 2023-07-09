import React from 'react'
import {motion} from 'framer-motion'

const Slider = () => {
  return (
    <div className='bg-dark text-info'>
        <motion.h6 className='m-0'
            animate={{x:[500,0]}}
            transition={{
                duration:5,
                delay:5,
                ease:'easeIn',
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