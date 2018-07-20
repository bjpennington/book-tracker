// set up angular app
const app = angular.module('BookCollectionApp', ['ngRoute', function() {
}]);

// configure client side routing
app.config(['$routeProvider', function($routeProvider) {   
    $routeProvider
        .when('/', {
            redirectTo : '/books'
        })
        .when('/books', {
            templateUrl : 'views/books.html',
            controller : 'BooksController as vm'
        })
        .when('/genres', {
            templateUrl : 'views/genres.html',
            controller : 'GenresController as vm'
        })
        .otherwise({
            template : '<h2>404</h2>'
        });
}])