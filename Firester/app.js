(function (window, firebase) {
    'use strict';

    var config = {
        apiKey: "AIzaSyAmplRymWDI6re-CADdUU-cusooKgkumN4",
        authDomain: "psi-mozambique.firebaseapp.com",
        databaseURL: "https://psi-mozambique.firebaseio.com",
        projectId: "psi-mozambique",
        storageBucket: "psi-mozambique.appspot.com",
        messagingSenderId: "161813301285"
    },
    child = 'funfact';

    var fire = firebase.create(config, child);

    fire.fetchAll();

}(window, window.Firebase));