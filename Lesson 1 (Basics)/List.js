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
            find: function (item) {

            }
        };
        
    })();
    window.List = List;
})(window);