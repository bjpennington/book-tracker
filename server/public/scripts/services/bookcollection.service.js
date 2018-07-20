app.service('BookCollectionService', ['$http', function($http) {
    console.log('Book Collection Service loaded');
    const self = this;

    self.genres = {
        list : []
    }

    self.getGenres = function() {
        $http.get('/genres')
             .then(function(response) {
                 console.log('response from /genres GET', response);
                 self.genres.list = response.data;  
             })
             .catch(function(error) {
                 console.log('Genres GET error:', error);
             });
    }

    self.getGenres();
}]);