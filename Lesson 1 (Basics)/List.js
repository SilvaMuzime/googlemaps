(function(window) {
    var List = (function() {
        function List(params) {
            this.items = [];
        }    
        List.prototype = {
            add: function(item) {
                this.items.push(item);
            },
            remove: function(item) {
                var indexOf = this.items.indexOf(items);
                if(indexOf !== -1){
                    this.items.splice(indexOf, 1);
                }
            },
            find: function (callback, action) {
                var callBackReturn,
                    items = this.items,
                    length = items.length,
                    matches = [],
                    i = 0;
                for(; i < length; i++) {
                    callBackReturn = callback(items[i], i);
                    if(callBackReturn){
                        matches.push(items[i]);
                    }
                }
                if(action){
                    action.call(this, matches);
                }
                return matches;
            }
        };
        return List;
    })();

    List.create = function(params) {
        return new List(params);
    };
    window.List = List;
})(window);