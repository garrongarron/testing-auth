import './FirebaseConnection.js'
import fb from './Facebook.js'
import { check, singOut } from './Auth.js'
import gg from './Google.js'


document.querySelector('.fb').addEventListener('click',()=>{
    fb()
})
document.querySelector('.gg').addEventListener('click',()=>{
    gg()
})
document.querySelector('.out').addEventListener('click',()=>{
    singOut()
})
check()