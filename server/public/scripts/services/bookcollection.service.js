app.service('BookCollectionService', ['$http', function ($http) {
    console.log('Book Collection Service loaded');
    const self = this;

    self.genres = {
        list: []
    }

    self.books = {
        list: []
    }

    self.addGenre = function (newGenre) {
        $http.post('/genres', newGenre)
            .then(function (response) {
                console.log('response from /genres POST', response);
                self.getGenre();
            })
            .catch(function (error) {
                console.log('Genres POST error:', error);
            });
    }

    self.getGenre = function () {
        $http.get('/genres')
            .then(function (response) {
                console.log('response from /genres GET', response);
                self.genres.list = response.data;
            })
            .catch(function (error) {
                console.log('Genres GET error:', error);
            });
    }

    self.deleteGenre = function (genreToDelete) {
        console.log(genreToDelete);
        
        if (genreToDelete.count == 0) {
            $http.delete(`/genres/${genreToDelete.id}`)
                .then(function (response) {
                    console.log('response from /genres DELETE', response);
                    self.getGenre();
                })
                .catch(function (error) {
                    console.log('Genres DELETE error:', error);
                });
        }
        else {
            alert('Genres with books cannot be deleted!');
        }
    }

    self.getBook = function() {
        $http.get('/books')
              .then(function(response) {
                  console.log('response from /books GET', response);
                  self.books.list = response.data;
              })
              .catch(function(error) {
                  console.log('Books GET error:', error);
              });
    }

    self.addBook = function(newBook) {
        console.log('book to be added:', newBook);
        
        $http.post('/books', newBook)
             .then(function(response) {
                 console.log('response from /books POST', response);
                 self.getBook();
             })
             .catch(function(error) {
                 console.log('Books POST error:', error);
             });
    }

    self.deleteBook = function(id) {
        $http.delete(`/books/${id}`)
             .then(function(response) {
                 console.log('response from /books DELETE', response);
                 self.getBook();
             })
             .catch(function(error) {
                 console.log('Books DELETE error:', error);  
             });
    }

    self.getBook();
    self.getGenre();
}]);