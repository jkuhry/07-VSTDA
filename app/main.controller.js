(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'MainFactory'];

    /* @ngInject */
    function MainController($http, MainFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////

        function activate() {
        	MainFactory.getTodos()
				.then(function(response) {

                vm.todos = response;

            })
        }

        function addTodo(todoName, todoPriority){
        	MainFactory.addTodo(vm.todos, todoName, todoPriority);
        }

        function deleteTodo(todo){
            MainFactory.deleteTodo(vm.todos, todo);

        }
    }
})();