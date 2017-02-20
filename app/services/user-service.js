//An Angular Service to retreive UserList from the backend
(function() {
    angular.module('myapp')
        .service('userService', ['$http', '$q', function($http, $q) {
            var usrSvc = this;


            //Function to get User List from the backend
            usrSvc.getUserList = function() {
                var defer = $q.defer();

                $http
                    .get('http://mocker.egen.io/users')
                    .then(function(response) {
                        console.log(response.data);
                        defer.resolve(response.data);
                    }, function(error) {
                        console.log(error.status);
                        defer.reject(error.status);
                    });
                return defer.promise;
            };

            usrSvc.addUser = function(newUser) {

                var defer = $q.defer();
                $http
                    .post('http://mocker.egen.io/users', newUser)
                    .then(function(response) {
                        usrSvc.resStatus = response.status;
                        defer.resolve(response.status);
                        console.log(response);
                    }, function(error) {
                        usrSvc.resStatus = error.status;
                        defer.reject(error.status);
                        console.log(error);
                    });
                return defer.promise;
            };


            usrSvc.getUserDetails = function(userId){
                var defer = $q.defer();
                var url = 'http://mocker.egen.io/users/' + userId;
                console.log("url: "+url);
                $http
                    .get(url)
                    .then(function(response){
                        defer.resolve(response.data);
                        console.log("response: " + response);
                    }, function(error){
                        defer.reject(error.status);
                        console.log(error);
                    });
                console.log(defer.promise);
                return defer.promise;
            };

            usrSvc.deleteUser = function(userId){
                var defer = $q.defer();
                var url = 'http://mocker.egen.io/users/' + userId;
                console.log("Delete User: ==>" + url);
                $http
                    .delete(url)
                    .then(function(response){
                        console.log(response);
                    }, function(error){
                        console.log(error);
                    });
                return defer.promise;
            };

        }]);
})();
