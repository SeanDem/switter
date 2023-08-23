import { c as create_ssr_component, f as add_attribute } from "../../chunks/ssr.js";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, onAuthStateChanged } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyxYCVc7Q9iS0f7udYiscLrGbcjxA4ccg",
  authDomain: "switter-c8c87.firebaseapp.com",
  projectId: "switter-c8c87",
  storageBucket: "switter-c8c87.appspot.com",
  messagingSenderId: "865202535032",
  appId: "1:865202535032:web:5cb519334a835bff940b8d",
  measurementId: "G-W3D2KDNHQ3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  const auth2 = getAuth(app);
  onAuthStateChanged(auth2, (user) => {
    if (user) {
      console.log("User signed up:", user);
    }
  });
  return `<h2 data-svelte-h="svelte-1xeorxw">Sign Up</h2> <button><img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style="height: 20px; vertical-align: middle;"> Sign up with Google</button> <div><input placeholder="Email" type="email"${add_attribute("value", email, 0)}> <input placeholder="Password" type="password"${add_attribute("value", password, 0)}> <button data-svelte-h="svelte-731n54">Sign up with Email</button></div>`;
});
export {
  Page as default
};
