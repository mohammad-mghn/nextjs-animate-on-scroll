import React from 'react'

import Animator, { AnimateProvider } from 'nextjs-animate-on-scroll'

const App = () => {
  return (
    <AnimateProvider>
      <div
        style={{
          height: '800vh',
          display: 'grid',
          placeItems: 'center',
          backgroundColor: '#2E2E2E'
        }}
      >
        <Animator
          amountDisplay={0.5}
          UNKey={'example'}
          initial={{ x: -300 }}
          onScreen={{ x: 0 }}
        >
          <div
            style={{
              color: '#fff',
              fontSize: '2rem'
            }}
          >
            nextjs-animate-on-scroll
          </div>
        </Animator>
        <Animator
          amountDisplay={0.1}
          UNKey={'example'}
          initial={{ scale: 1.2, opacity: 0 }}
          onScreen={{ scale: 1, opacity: 1 }}
        >
          <div
            style={{
              background:
                'linear-gradient(135deg, #2FECEC 14.73%, #4A2FEC 100%)',
              height: '30vw',
              width: '30vw',
              borderRadius: '1rem',
              display: 'grid',
              placeItems: 'center',
              fontWeight: '600',
              boxSizing: 'border-box'
            }}
          >
            {`amountDisplay={0.1}`}
            <br />
            {`initial={{ scale: 1.2, opacity: 0 }}`}
            <br />
            {`onScreen={{ scale: 1, opacity: 1 }}`}
          </div>
        </Animator>
        <Animator
          amountDisplay={0.75}
          UNKey={'example'}
          initial={{ y: 150, opacity: 0 }}
          onScreen={{ y: 0, opacity: 1 }}
          bounce={0.5}
        >
          <div
            style={{
              background:
                'linear-gradient(135deg, #ECD92F 14.73%, #EC2F46 100%)',
              height: '30vw',
              width: '30vw',
              borderRadius: '1rem',
              display: 'grid',
              placeItems: 'center',
              fontWeight: '600',
              boxSizing: 'border-box'
            }}
          >
            {`amountDisplay={0.75}`}
            <br />
            {`initial={{ y: 150, opacity: 0 }}`}
            <br />
            {`onScreen={{ y: 0, opacity: 1 }}`}
            <br />
            {`bounce={0.5}`}
          </div>
        </Animator>
      </div>
    </AnimateProvider>
  )
}

export default App
