import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import Rebase from 're-base'






const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkqDaYkEcCWzTIKgRg_I5Q783e7cAIntk",
    authDomain: "cleveroad-ca159.firebaseapp.com",
    projectId: "cleveroad-ca159",
    storageBucket: "cleveroad-ca159.appspot.com",
    messagingSenderId: "294298329251",
    appId: "1:294298329251:web:f25c03b69fe1e36ec91f16",
    measurementId: "G-M87D3J42P3"
  });


export const Context = createContext(null)


const  base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}
export default base;

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);