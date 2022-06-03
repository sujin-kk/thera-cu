import auth from "@react-native-firebase/auth";
import SignIn from "../screens/SignIn";

export function singIn({id, pw}){
  return auth().signInWithEmailAndPassword(id,pw);
}

export function singUp({id, pw}){
  return auth().createUserWithEmailAndPassword(id,pw);
}

export function subscribeAuth(callback){
  return auth().onAuthStateChanged(callback);
}
