(function() {
    angular
        .module('myapp')
        .controller('AddUserCtrl', AddUserCtrlfn);

    AddUserCtrlfn.$inject = ['userService'];

    function AddUserCtrlfn(userService) {
        var addUserVm = this;

        addUserVm.addUser = function() {
            userService.addUser(addUserVm.formData)
                .then(function(promiseStatus) {
                    addUserVm.statusCode = promiseStatus;
                    alert('Success! User created!');
                    console.log(promiseStatus);
                }, function(errorStatus) {
                    addUserVm.statusCode = errorStatus;
                    alert('An error occurred while creating the user');
                    console.log(errorStatus);
                });
        };


    }
})();
