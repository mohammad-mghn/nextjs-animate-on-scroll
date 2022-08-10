import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
export { AnimatePresence as AnimateProvider } from 'framer-motion/dist/framer-motion';

const Animator = props => {
  const {
    children,
    keyProp = 1,
    bounce = 0.5,
    amountDisplay = 0.25,
    initial = {
      scale: 1.2,
      opacity: 0
    },
    onScreen = {
      scale: 1,
      opacity: 1
    }
  } = props;
  const Varients = {
    offscreen: { ...initial
    },
    onscreen: { ...onScreen,
      transition: {
        type: 'spring',
        bounce: bounce,
        DelayNode: 1
      }
    }
  };
  return /*#__PURE__*/React.createElement(motion.div, {
    key: keyProp,
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: {
      amount: amountDisplay
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: Varients
  }, children));
};

export default Animator;
//# sourceMappingURL=index.modern.js.map
