app.controller('FavoritesController', ['BookCollectionService', function(BookCollectionService) {
    const self = this;

    // get favorites data from service
    self.favorites = BookCollectionService.favorites;

    // get favoriteBook function from service
    self.favoriteBook = BookCollectionService.favoriteBook;
}]);