import React from 'react'

import Animator, { AnimateProvider } from 'nextjs-animate-on-scroll'

const App = () => {
  return (
    <AnimateProvider>
      <div>
        <Animator
          amountDisplay={0.5}
          UNKey={'example'}
          initial={{ x: -300 }}
          onScreen={{ x: 0 }}
        >
          {/* your component */}
        </Animator>
      </div>
    </AnimateProvider>
  )
}

export default App
