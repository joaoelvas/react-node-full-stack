import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyArZHRLp-P2T3w1ftiU7xahWBjqtLdNqec",
    authDomain: "nba-full-1fa00.firebaseapp.com",
    databaseURL: "https://nba-full-1fa00.firebaseio.com",
    projectId: "nba-full-1fa00",
    storageBucket: "nba-full-1fa00.appspot.com",
    messagingSenderId: "544875818764"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');
const firebaseImageStorage = firebase.storage().ref('images');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper,
    firebaseImageStorage
}