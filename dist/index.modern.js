import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
export { AnimatePresence as AnimateProvider } from 'framer-motion/dist/framer-motion';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var Animator = function Animator(props) {
  var children = props.children,
      _props$UNKey = props.UNKey,
      UNKey = _props$UNKey === void 0 ? 1 : _props$UNKey,
      _props$bounce = props.bounce,
      bounce = _props$bounce === void 0 ? 0.5 : _props$bounce,
      _props$amountDisplay = props.amountDisplay,
      amountDisplay = _props$amountDisplay === void 0 ? 0.25 : _props$amountDisplay,
      _props$initial = props.initial,
      initial = _props$initial === void 0 ? {
    scale: 1.2,
    opacity: 0
  } : _props$initial,
      _props$onScreen = props.onScreen,
      onScreen = _props$onScreen === void 0 ? {
    scale: 1,
    opacity: 1
  } : _props$onScreen;
  var Varients = {
    offscreen: _extends({}, initial),
    onscreen: _extends({}, onScreen, {
      transition: {
        type: 'spring',
        bounce: bounce,
        DelayNode: 1
      }
    })
  };
  return /*#__PURE__*/React.createElement(motion.div, {
    key: UNKey,
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
