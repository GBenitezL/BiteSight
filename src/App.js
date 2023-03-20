import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABV0cxZDirJRMRi7s-kaokVMKowIQVvcI",
  authDomain: "bitesight-858b3.firebaseapp.com",
  projectId: "bitesight-858b3",
  storageBucket: "bitesight-858b3.appspot.com",
  messagingSenderId: "293181672360",
  appId: "1:293181672360:web:dcadf33ed497af5a94eb9d",
  measurementId: "G-8YTTZJMMJD",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">{user ? <SignOut /> : <SignIn />}</header>
    </div>
  );
}

function SignIn() {
  const facebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("user_birthday");
    provider.addScope("user_gender");
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      const userInfo = result.additionalUserInfo.profile;
      const userData = {
        name: userInfo.name,
        email: userInfo.email,
        gender: userInfo.gender,
        birthday: userInfo.birthday,
      }
      const userRef = db.collection("users").doc(user.uid);
      userRef
        .get()
        .then((doc) => {
          if (!doc.exists) {
            userRef
              .set(userData)
              .then(() => {
                console.log("User data saved to Firestore");
              })
              .catch((error) => {
                console.error("Error saving user data to Firestore: ", error);
              });
          } else {
            console.log("User already in database");
          }
        })
        .catch((error) => {
          console.error("Error checking user document in Firestore: ", error);
        });
    });
  };
  return <button onClick={facebookSignIn}> Sign in with Facebook</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
