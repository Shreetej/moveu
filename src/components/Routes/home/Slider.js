import React from 'react'
import {motion} from 'framer-motion'

const Slider = () => {
  return (
    <div className='bg-dark text-info'>
        <motion.h6 className='m-0'
            animate={{x:[1000,-1000]}}
            transition={{
                duration:10,
                delay:0,
                ease:'linear',
                repeat:Infinity
            }}

            whileHover={{scale:1.1}}
        >
            No exercise results in 1. Less efficient Heart 2. Weak Muscles 3. Less Sleep 4. Disrupted Sugar Levels 
        </motion.h6>
    </div>
  )
}

export default Slider