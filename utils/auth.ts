import { getAuth } from "firebase/auth";
import firebaseInit from "./firebase";

const firebaseAuth = getAuth(firebaseInit);

export default firebaseAuth;