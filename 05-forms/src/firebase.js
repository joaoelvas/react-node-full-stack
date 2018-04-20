import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCnObvZ3UmqTSX-Tm1xs0XLT8H382_WOdw",
    authDomain: "forms-test-5cef1.firebaseapp.com",
    databaseURL: "https://forms-test-5cef1.firebaseio.com",
    projectId: "forms-test-5cef1",
    storageBucket: "forms-test-5cef1.appspot.com",
    messagingSenderId: "134266931941"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    firebaseDB,
    googleAuth
}

// firebaseDB.ref('car').update({
//     brand: 'Ford',
//     color: 'Black'
// })
//     .then(() => {
//         console.log('data updated');
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// firebaseDB.ref('car/brand').once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// firebaseDB.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// setTimeout(() => {
//     firebaseDB.ref('name').set('Name 1')
// },3000)

// setTimeout(() => {
//     firebaseDB.ref().off()
// },5000)

// setTimeout(() => {
//     firebaseDB.ref('name').set('Name 2')
// },6000)

// firebaseDB.ref().on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// firebaseDB.ref().on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// firebaseDB.ref().on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// firebaseDB.ref('users').push({
//     name: 'Randy',
//     lastname: 'Martial'
// })

// firebaseDB.ref('users').once('value')
//     .then((snapshot) => {
//         const users = [];

//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(users)
//     });

// firebaseDB.ref('users').orderByChild('age').once('value')
//     .then((snapshot) => {
//         const users = [];

//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(users)
//     });

// firebaseDB.ref('users').limitToFirst(1).once('value')
//     .then((snapshot) => {
//         const users = [];

//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(users)
//     });

// firebaseDB.ref('users').limitToLast(1).once('value')
//     .then((snapshot) => {
//         const users = [];

//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(users)
//     });

// firebaseDB.ref('users').orderByChild('age').limitToFirst(1).once('value')
//     .then((snapshot) => {
//         const users = [];

//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(users)
//     });

// firebaseDB.ref('users').push({
//     name:'Steve',
//     lastname:"Ball"
// })

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })