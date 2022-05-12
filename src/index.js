// import { Nav } from './js/nav'
/**
 * Imports css for webpack (for development only)
 * NOTE: Checho ignore this line
 */
import 'styles/app.scss'

/**
 * Hot reloading (for development only - Webpack)
 * Note: Checho Ignore this if block
 * 
 */
if (module.hot) {
  module.hot.accept()
}
class App {
  constructor(el) {
    this.body = el
    // import modules
    this.init()
  }

  init() {
    console.log('Hola Checho')
    // run the modules
  }
}

const app = {
  init() {
    const wrapperEl = document.querySelector('#app')
    if (wrapperEl) {
      const app = new App(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

// load
window.addEventListener('DOMContentLoaded', () => app.init())