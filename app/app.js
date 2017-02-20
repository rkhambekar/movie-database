
// Code goes here

(function(){

    angular
        .module('myapp',['ngMessages','ngRoute'])
        .config(myappConfigfn);

    myappConfigfn.$inject = ['$routeProvider'];

    function myappConfigfn($routeProvider){
        $routeProvider
            .when('/users',{
                templateUrl: 'app/views/userlist-tmpl.html',
                controller: 'UserListCtrl',
                controllerAs: 'UserListVm'
            })
            .when('/users/:id',{
                templateUrl: 'app/views/userdetails-tmpl.html',
                controller: 'UserDetailsCtrl',
                controllerAs: 'UserDetailsVm'
            })
            .when('/newuser',{
                templateUrl: 'app/views/adduser-tmpl.html',
                controller: 'AddUserCtrl',
                controllerAs: 'addUserVm'
            })
            .otherwise({
                redirectTo: '/users'
            });
    }



})();