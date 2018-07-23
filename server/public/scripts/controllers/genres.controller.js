// set up controller for book view
app.controller('GenresController', ['BookCollectionService', function (BookCollectionService) {
    const self = this;

    // get genres data from service
    self.genres = BookCollectionService.genres;

    // get addGenre function from service
    self.addGenre = BookCollectionService.addGenre;

    // get deleteGenre function from service
    self.deleteGenre = BookCollectionService.deleteGenre;
}]);