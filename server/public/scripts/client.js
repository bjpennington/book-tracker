console.log('js');

const app = angular.module('BookCollectionApp', ['ngRoute', function() {
    console.log('BookCollectionApp loaded');
}]);

app.config(['$routeProvider', function($routeProvider) {
    console.log('Route config loaded');
    
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