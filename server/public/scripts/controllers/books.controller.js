app.controller('BooksController', ['BookCollectionService', function(BookCollectionService) {
    console.log('BooksController loaded');
    const self = this;
    self.message = 'Books Loaded'

    self.books = BookCollectionService.books;

    self.genres = BookCollectionService.genres;

    self.addBook = BookCollectionService.addBook;

    self.deleteBook = BookCollectionService.deleteBook;
}]);