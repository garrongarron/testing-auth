import { signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getAuth } from "./Auth.js";


const provider = new FacebookAuthProvider();

const auth = getAuth();

let logginFromFacebook = () => {
    console.log('trying with facebook');
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const user = result.user;
            const accessToken = credential.accessToken;
            console.log(result);
        }).catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
}

export default logginFromFacebook

