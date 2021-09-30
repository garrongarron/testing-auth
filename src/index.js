import './FirebaseConnection.js'
import loggin from './Facebook.js'
import { check, singOut } from './Auth.js'


document.querySelector('.fb').addEventListener('click',()=>{
    loggin()
})
document.querySelector('.out').addEventListener('click',()=>{
    singOut()
})
check()