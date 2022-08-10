import React from 'react'

import Animator, { AnimateProvider } from 'nextjs-animate-on-scroll'

const App = () => {
  return (
    <AnimateProvider>
      <div
        style={{
          height: '500vh',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Animator
          amountDisplay={0.1}
          UNKey={'example'}
          initial={{ scale: 1.2, opacity: 0 }}
          onScreen={{ scale: 1, opacity: 1 }}
        >
          <div
            style={{ backgroundColor: 'red', height: '40vw', width: '40vw' }}
          ></div>
        </Animator>
      </div>
    </AnimateProvider>
  )
}

export default App
