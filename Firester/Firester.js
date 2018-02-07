(function(window, firebase) {

    var Firester = (function() {
        function Firester() {

        }

        Firester.prototype = {

            save: function() {

            },

            load: function () {

                 ref = firebase.database().ref().child('scores');
                 var result = [];
                 ref.on('value', function (datasnapshot) {

                     datasnapshot.forEach(function (data) {
                        result.push(data.val());
                    });
                 });
                 return result;
            }
        };

        return Firester;
    })();

    Firester.create = function () {
        return new Firester();
    };

    window.Firester = Firester;

})(window, firebase);