(function(){

    describe('userdetails-controller', function(){

        var userDetailsVm, service;
        mockSvcResponse =
            {
                id: "42839402-601e-4279-9e55-djws9sk0242",
                firstName: "Kaitlyn",
                lastName: "Stark",
                email: "katstark@got.com",
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
            service = userService;

            var defer = $q.defer();

            defer.resolve(mockSvcResponse);

            spyOn(service, 'getUserDetails').and.returnValue(defer.promise);

            userDetailsVm = $controller('UserListCtrl', {'userService' : service});

            $rootscope.$apply();

        }));

        it('should be defined', function(){
            expect(userDetailsVm).toBeDefined();
        });

        describe('should get user details', function(){
            it(' | Success', function(){
                expect(userDetailsVm.user).toEqual(200, {});
            });

            it(' | Error ', function(){
                expect(userDetailsVm.user).toEqual(500, {});
            });
        });





    });

})();