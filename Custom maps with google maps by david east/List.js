(function (window) {
    var List = (function () {
        function List() {
            this.items = [];
        }
        List.prototype = {
            add: function (item) {
                this.items.push(item);
            },
            remove: function (item) {
                var indexOf = items.indexOf(item);

                if(indexOf !== -1){
                    this.items.splice(indexOf, 1);
                }
            },
            find: function (callback) {
                var callbackReturn,
                    items = this.items,
                    matches = [];

                for (var i = 0; i < items.length; i++) {
                    callbackReturn = callback(items[i], i);
                    if (callbackReturn) {
                        matches.push(items[i]);
                    }
                }
                return matches;
            }
        };

        return List;

    }());

    List.create = function () {
        return new List();
    };

    window.List = List;
}(window));