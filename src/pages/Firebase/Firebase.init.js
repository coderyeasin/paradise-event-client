
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebase.config";

const paradiseInitialization = () => {
     initializeApp(firebaseConfig)
}
export default paradiseInitialization