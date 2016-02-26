'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

    $scope.addItem = function() {
        var item = {name: "Click here to name the item."};
        $scope.items.unshift(item);
    };


    dataService.getItems(function(res){
        console.log(res.data);
        $scope.items =  res.data;
    });

    $scope.deleteItem = function(item, index) {
        dataService.deleteItem(item);

        $scope.items.splice(index, 1);
    };

    $scope.saveitem = function(item) {
        dataService.saveitem(item);
    };
});