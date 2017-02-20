(function() {
    angular.module('myapp')
        .controller('UserDetailsCtrl', UserDetailCtrlfn);

    UserDetailCtrlfn.$inject = ['userService', '$routeParams'];

    function UserDetailCtrlfn(userService, $routeParams) {

        var UserDetailsVm = this;


        userService.getUserDetails($routeParams.id).then(function(userDet) {
            console.log("userDet: ");
            UserDetailsVm.userDetail = userDet;
        }, function(error) {
            console.log(error);
        });

        UserDetailsVm.deleteUser = function(userId){
            userService.deleteUser(userId)
                .then(function(response){
                    alert("Success! User deleted");
                }, function(error){
                    alert("An error occurred while deleting the user");
                });
        };


    }
})();
