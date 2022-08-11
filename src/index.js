import React from 'react'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const Animator = (props) => {
  const {
    children,
    UNKey = 1,
    bounce = 0.5,
    amountDisplay = 0.25,
    initial = { scale: 1.2, opacity: 0 },
    onScreen = { scale: 1, opacity: 1 }
  } = props

  const Varients = {
    offscreen: {
      ...initial
    },
    onscreen: {
      ...onScreen,
      transition: {
        type: 'spring',
        bounce: bounce,
        DelayNode: 1
      }
    }
  }

  return (
    <motion.div
      key={UNKey}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: amountDisplay }}
    >
      <motion.div variants={Varients}>{children}</motion.div>
    </motion.div>
  )
}

export default Animator

export { AnimatePresence as AnimateProvider }
