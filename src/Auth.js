import { getAuth as getAuthFromFireBase, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

let auth = getAuthFromFireBase()

let check = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });

        } else {
            console.log('No user logged');
        }
    });
}

let singOut = () => {
    auth.signOut();
}

let getAuth = ()=>{
    return auth
}

export {getAuth,  check, singOut }