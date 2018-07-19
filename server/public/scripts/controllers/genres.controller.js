app.controller('GenresController', ['BookCollectionService', function(BookCollectionService) {
    console.log('GenresController loaded');
    const self = this;
    self.message = 'Genres Loaded'
}]);