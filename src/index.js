import './Auth.js'
import loggin, { check } from './Facebook.js'


document.querySelector('.fb').addEventListener('click',()=>{
    loggin()
})
check()