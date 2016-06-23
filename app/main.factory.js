(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTodos: getTodos,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////

        function getTodos() {
            return $http({
                method: 'GET',
                url: 'app/prilist.json'
            }).then(function(response){

                return response.data;

            });

        }

        function addTodo(todos, todoName, todoPriority){

            var newTodo = {name: todoName, priority: todoPriority};
            return todos.push(newTodo);

        }   //my delete function start.

        function deleteTodo(todos, todo){

            return todos.splice(todos.indexOf(todo), 1);

        }
    }
})();