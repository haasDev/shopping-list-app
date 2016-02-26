'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
    this.getItems = function(callback){
        $http.get('mock/items.json')
        .then(callback);
    };

    this.deleteItem = function(item){
        console.log("The " + item.name + " item has been deleted!");

        //other logic
    };

    this.saveItem = function(item){
        console.log("The " + item.name+ " item has been saved!");

        //other logic
    };
});