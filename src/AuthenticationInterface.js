import auth from "./Auth.js"
import fb from './Facebook.js'
import gg from './Google.js'

class AuthenticationInterface {
    constructor() { }
    showAuthInterface = (nav, isLogged) => {
        let btnToSingIn = `
            <button class="gg">
                <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18Z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17Z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07Z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3Z" fill="#EA4335"></path></svg>
                <span>Google</span>
            </button>
            <button class="fb">
                <svg aria-hidden="true" class="svg-icon iconFacebook" width="18" height="18" viewBox="0 0 18 18"><path d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z" fill="white"></path></svg>
                <span>Facebook</span>
            </button>`
        let btnToSingOut = `<button class="out">Sign Out</button>`
        nav.innerHTML = (isLogged) ? btnToSingOut : btnToSingIn
    }
    eventHandlers = (isLogged) => {
        if (isLogged) {
            document.querySelector('.out').addEventListener('click', () => { auth.singOut() })
            //remove
            document.querySelector('.gg').removeEventListener('click')
            document.querySelector('.fb').removeEventListener('click')
        } else {
            document.querySelector('.fb').addEventListener('click', () => { fb() })
            document.querySelector('.gg').addEventListener('click', () => { gg() })
            //remove
            document.querySelector('.out').removeEventListener('click')
        }
    }
    authentication = (isLogged) => {
        let nodeElement = document.querySelector('nav')// CONTAINER
        this.showAuthInterface(nodeElement, isLogged)
        this.eventHandlers(isLogged)
    }
    hideOption = (selector) => {
        document.querySelector(selector).style.display = 'none'
    }
}

let authenticationInterface = new AuthenticationInterface()

export default authenticationInterface
