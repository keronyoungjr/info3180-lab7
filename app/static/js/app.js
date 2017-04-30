// Your JavaScript Code here
/* global angular */
var app = angular.module('imgApp', []);

app.factory('images', ['$http', function($http) {
    return $http({method: 'GET', url:"/api/thumbnails"}).then(function(response) {
        console.log("tst");
        return response;
        
    });
    
    
}]);

app.controller('grid_display', ['$scope', 'images', function($scope, images){
    images.then(function(img) {
        $scope.pictures = img.data;
        console.log("Here");
        console.log($scope.pictures);
    });
}]);