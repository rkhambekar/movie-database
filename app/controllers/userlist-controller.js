(function() {
    angular.module('myapp')
        .controller('UserListCtrl', UserListCtrlfn);

    UserListCtrlfn.$inject = ['userService','$window'];

    function UserListCtrlfn(userService, $window) {
        var UserListVm = this;



        userService.getUserList()
            .then(function(promiseObj) {
                UserListVm.users = promiseObj;
            }, function(error) {
                console.log(error);
            });
    }


})();
