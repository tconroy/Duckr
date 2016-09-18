import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCwHvtm1fwOkq2KUKsJgNAcOFIo3G50E9I',
  authDomain: 'duckr-d948d.firebaseapp.com',
  databaseURL: 'https://duckr-d948d.firebaseio.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000
