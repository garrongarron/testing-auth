import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getAuth } from "./Auth.js";


const provider = new GoogleAuthProvider();

const auth = getAuth();

let logginFromGoogle = () => {
    console.log('trying with google');
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(result);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
        });
}

export default logginFromGoogle

