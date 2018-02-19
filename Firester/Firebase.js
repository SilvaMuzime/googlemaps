(function (window, firebase) {
    'use strict';

    var Firebase = (function () {

        function Firebase(config, child) {
            this.locations = [];
            firebase.initializeApp(config);
            this.dbReference = firebase.database().ref().child(child);
        }

        Firebase.prototype = {

            push: function () {

            },
            fetchAll: function () {
                var self = this;

                this.dbReference.on('value', function (datasnapt) {
                    datasnapt.forEach(function (data) {

                        //self.locations.push(data);
                        console.log(data.val().title + '\n' + data.val().content + '\n' + data.val().imageUrl);
                    });
                });
            }
        };

        return Firebase;
    }());

    Firebase.create = function (config, child) {
        return new Firebase(config, child);
    };

    window.Firebase = Firebase;

}(window, firebase));