// Your JavaScript Code here
/* global angular */
/* global angular */
var app = angular.module("imgApp", []);

app.controller("img_grid", function($scope, $http){
    $http.get('/api/thumbnails').then(function(response){
        $scope.images = response.data["thumbnails"];
    });
});