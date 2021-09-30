import { signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getAuth } from "./Auth.js";


const provider = new FacebookAuthProvider();

const auth = getAuth();

let loggin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
   const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
}


export default loggin

