# nextjs-animate-on-scroll

NPM Package for Next.js framework to animate components on scroll easily created by [vito.mohagheghian](https://vito.vercel.app).

## <img src="https://slackmojis.com/emojis/11401-among-us-dance/download" width="18"/> Demo

![Preview](/preview/preview.gif)

> [Live Demo](https://google/com)

## <img src="https://slackmojis.com/emojis/12349-among_us_pet/download" width="20"/> Installation

```bash
# npm 
npm install nextjs-animate-on-scroll 

# yarn 
yarn add nextjs-animate-on-scroll
```

## <img src="https://slackmojis.com/emojis/11386-among_us_orange_dance/download" width="20"/> Usage

```jsx
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
          initial={{ scale: 1.2, opacity: 0 }}
          onScreen={{ scale: 1, opacity: 1 }}
        >
          {/* your component */}
        </Animator>
      </div>
    </AnimateProvider>
  )
}

export default App
```

### AnimateProvider

> For using AnimateProvider in the app you have put it in a way that Animator be its child, no matter using that in _app, or other components.

### Animator

> For using Animator in the app you have to wrap elements that want to become animated.

### Animator Props

| Name                | Type       | Default Value | Required? | Description                                            |
| ------------------- | ---------- | ------------- | --------- | ------------------------------------------------------ |
| initial           | `Obejsct`  | `undefined`   | Yes | Initial styles of wrapped component                      |
| onScreen               | `Object`   | `undefined`    | Yes | Styles of component when becomed in view |
| UNKey          | -  | 1         | Yes | like key prop                      |
| amountDisplay       | `Number` | 0.25     | No | The amount of element should become in view to run animation                       |
| bounce | `Number` | 0.5     | No | the amount bounce from 0 to 1                                   |

## <img src="https://slackmojis.com/emojis/10512-amongus/download" width="20"/> License

MIT © [vito-mohagheghian](https://github.com/vito-mohagheghian)

<p><a href="https://github.com/vito-mohagheghian" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-DD0031?&style=for-the-badge&logo=Github&logoColor=white" /></a> <a href="https://twitter.com/hereisvito" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a> <a href="https://www.linkedin.com/in/mohammad-mohagheghian-5a8160214/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-FB542B?&style=for-the-badge&logo=linkedin&logoColor=white" /></a> 
