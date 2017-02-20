(function(){

    describe('adduser-controller', function(){

        var usrSvc, addUserVm;

        var mockResponse = {
            id: "sdfsdfas5-601e-4279-9e55-34534534642",
            firstName: "Ned",
            lastName: "Stark",
            email: "nedstark@got.com",
            address: {
                street: "king's castle",
                city: "winterfell",
                zip: "24007",
                state: "North",
                country: "GOT"
            },
            dateCreated: "2016-06-03T04:20:49.339Z",
            company: {
                name: "King in the North",
                website: "http://GoT.net"
            },
            profilePic: "http://lorempixel.com/640/480/technics"
        };

        beforeEach(module('myapp'));

        beforeEach(inject(function($controller, userService, $q, $rootscope){
            usrSvc = userService;

            var defer = $q.defer();

            defer.resolve(mockResponse);

            spyOn(usrSvc, 'addUser').and.returnValue(defer.promise);

            addUserVm = $controller('AddUserCtrl', {'userService': usrSvc});

            $rootscope.$apply();
        }));

        it('should be defined', function(){
            expect(addUserVm).toBeDefined();
        });

        it('should get success status', function(){
            expect(addUserVm.statusCode).toEqual(200, {});
        });

        it('should get error status', function(){
            expect(addUserVm.statusCode).toEqual(500, {});
        });

    });

})();