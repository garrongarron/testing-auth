import {getAuth, signInWithPopup, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";


const provider = new FacebookAuthProvider();
provider.setCustomParameters({
  'display': 'popup'
});
const auth = getAuth();

let loggin = ()=>{
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(result);

      // ...
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });

}

export default loggin
