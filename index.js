const axios = require('axios');
var firebase = require('firebase');

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyBJH6xAd_BjhkM_tMxRV3MPHYmUsMCfyW4",
    authDomain: "656714075575.firebaseapp.com",
    databaseURL: "https://iottest-fb727.firebaseio.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(i) {
    firebase.database().ref('/').set({
        Counter: i,
        temperature: 26
    });
}
const read = () => {
    var starCountRef = firebase.database().ref('/');
    starCountRef.on('value', function (snapshot) {
        console.log(snapshot.val())

    });
}

console.log(read());
for (var i = 0; i < 5; i++){
    writeUserData(i);
}


