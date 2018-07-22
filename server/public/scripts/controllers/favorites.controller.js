app.controller('FavoritesController', ['BookCollectionService', function(BookCollectionService) {
    const self = this;

    self.favorites = BookCollectionService.favorites;

    self.favoriteBook = BookCollectionService.favoriteBook;
}]);