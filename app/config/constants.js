import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCwHvtm1fwOkq2KUKsJgNAcOFIo3G50E9I',
  authDomain: 'duckr-d948d.firebaseapp.com',
  databaseURL: 'https://duckr-d948d.firebaseio.com',
  storageBucket: 'duckr-d948d.appspot.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

