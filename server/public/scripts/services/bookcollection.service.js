// set up angular service
app.service('BookCollectionService', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {

    const self = this;

    // object to hold genres data
    self.genres = {
        list: []
    }

    // object to hold books data
    self.books = {
        list: []
    }

    // object to hold favorite books data
    self.favorites = {
        list: []
    }

    // add new genre
    self.addGenre = function (newGenre) {
        $http.post('/genres', newGenre)
            .then(function (response) {
                self.getGenre();
                self.showToast('Genre Added!');
            })
            .catch(function (error) {
                console.log('Genres POST error:', error);
            });
    }

    // get genres from server
    self.getGenre = function () {
        $http.get('/genres')
            .then(function (response) {
                self.genres.list = response.data;
            })
            .catch(function (error) {
                console.log('Genres GET error:', error);
            });
    }

    // delete genres with no books
    self.deleteGenre = function (genreToDelete) {
        if (genreToDelete.count == 0) {
            $http.delete(`/genres/${genreToDelete.id}`)
                .then(function (response) {
                    self.getGenre();
                    self.showToast('Genre Deleted!');
                })
                .catch(function (error) {
                    console.log('Genres DELETE error:', error);
                });
        } else {
            alert('Genres with books cannot be deleted!');
        }
    }

    // get books from server
    self.getBook = function () {
        $http.get('/books')
            .then(function (response) {
                self.books.list = response.data;
            })
            .catch(function (error) {
                console.log('Books GET error:', error);
            });
    }

    // add new book
    self.addBook = function (newBook) {
        $http.post('/books', newBook)
            .then(function (response) {
                self.getBook();
                self.showToast('Book Added!');
            })
            .catch(function (error) {
                console.log('Books POST error:', error);
            });
    }

    // delete book
    self.deleteBook = function (id) {
        $http.delete(`/books/${id}`)
            .then(function (response) {
                self.getBook();
                self.getFavorite();
                self.showToast('Book Deleted!');
            })
            .catch(function (error) {
                console.log('Books DELETE error:', error);
            });
    }

    // make a book a favorite
    self.favoriteBook = function (id) {
        $http.put(`/books/${id}`)
            .then(function (response) {
                self.getBook();
                self.getFavorite();
            })
            .catch(function (error) {
                console.log('Books favorite PUT error:', error);

            });
    }

    // get all favorites from server
    self.getFavorite = function () {
        $http.get('/books/favorites')
            .then(function (response) {
                self.favorites.list = response.data;
            })
            .catch(function (error) {
                console.log('Favorites GET error:', error);
            });
    }

    // toast alert function to use with other functions
    self.showToast = function (toastText) {
        $mdToast.show(
            $mdToast.simple()
            .textContent(toastText)
        );
    }

    self.getBook();
    self.getGenre();
    self.getFavorite();
}]);