app.controller('BooksController', ['BookCollectionService', function(BookCollectionService) {
    console.log('BooksController loaded');
    const self = this;
    self.message = 'Books Loaded'

    self.books = BookCollectionService.books;
}]);