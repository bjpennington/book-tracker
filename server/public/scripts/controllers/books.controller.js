// set up controller for books view
app.controller('BooksController', ['BookCollectionService', function (BookCollectionService) {
    const self = this;

    // get books data from service
    self.books = BookCollectionService.books;

    // get genre data from service
    self.genres = BookCollectionService.genres;

    // get addBook function from service
    self.addBook = BookCollectionService.addBook;

    // get deleteBook function from service
    self.deleteBook = BookCollectionService.deleteBook;

    // get favoriteBook function from service
    self.favoriteBook = BookCollectionService.favoriteBook;
}]);