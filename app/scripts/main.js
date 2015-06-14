var greenApp = angular.module('greenApp', ['ngRoute']);

greenApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    
    .when('/search', {
        templateUrl: 'pages/search.html',
        controller: 'secondController'
    })
    
    .when('/sort', {
        templateUrl: 'pages/sort.html',
        controller: 'secondController'
    })

    .when('/growth', {
        templateUrl: 'pages/growth.html',
        controller: 'secondController'
    })

    .when('/resources', {
        templateUrl: 'pages/resources.html',
        controller: 'secondController'
    })

    .when('/expos', {
        templateUrl: 'pages/expos.html',
        controller: 'secondController'
    })

    .when('/account', {
        templateUrl: 'pages/account.html',
        controller: 'secondController'
    })
    
});

greenApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

greenApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);