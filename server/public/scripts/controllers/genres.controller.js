app.controller('GenresController', ['BookCollectionService', function(BookCollectionService) {
    console.log('GenresController loaded');
    const self = this;
    self.message = 'Genres Loaded';

    self.genres = BookCollectionService.genres;

    self.addGenre = BookCollectionService.addGenre;

    self.deleteGenre = BookCollectionService.deleteGenre;
}]);