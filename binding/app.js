var viewModel = function() {
    this.names = ko.observableArray(['ivan','jose','bila','byron','chence','celia']);

};

ko.applyBindings(new viewModel());