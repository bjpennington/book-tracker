// set up angular service
app.service('BookCollectionService', ['$http', function ($http) {

    const self = this;

    // object to hold genres data
    self.genres = {
        list: []
    }

    // object to hold books data
    self.books = {
        list: []
    }

    // add new genre
    self.addGenre = function (newGenre) {
        $http.post('/genres', newGenre)
            .then(function (response) {
                self.getGenre();
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

    // delete genres with no movies
    self.deleteGenre = function (genreToDelete) {
        if (genreToDelete.count == 0) {
            $http.delete(`/genres/${genreToDelete.id}`)
                .then(function (response) {
                    self.getGenre();
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
            })
            .catch(function (error) {
                console.log('Books DELETE error:', error);
            });
    }

    self.getBook();
    self.getGenre();
}]);