(
    function(){
        describe('user-service', function(){
            beforeEach(module('myapp'));

            beforeEach(inject(function($injector, $httpBackend){
                userService = $injector('userService');
                httpBackend = $httpBackend;
            }));

            describe('should get all users', function(){
                it(' | Success', function(){
                    httpBackend.expectGET('http://mocker.egen.io/users').respond(200, [{}, {}, {}]);
                    userService.getUserList().then(function(results){
                        expect(result.length).toEqual(3);
                    });
                });

                it(' | Error', function(){
                    httpBackend.expectGET('http://mocker.egen.io/users').respond(500, {});
                    userService.getUserList().then(function(error){
                        expect(error).toEquals({});
                    });
                });
            });

            it('should get a specific user', function(){
                it(' | Success', function(){
                    httpBackend.expectGET('http://mocker.egen.io/users/de1922cc-601e-4a6f-9e55-4415f25f5a60')
                        .respond(200, {});
                    userService.getUserDetails().then(function(result){
                        expect(result).toEquals({});
                    });
                });

                it(' | Error', function(){
                    httpBackend.expectGET('http://mocker.egen.io/users/de1922cc-601e-4a6f-9e55-4415f25f5a60')
                        .respond(500, {});
                    userService.getUserDetails().then(function(result){
                        expect(result).toEquals({});
                    });
                });
            });

            it('should send msg to server', function() {
                var controller = createController();
                httpBackend.flush();

                // now you don’t care about the authentication, but
                // the controller will still send the request and
                // $httpBackend will respond without you having to
                // specify the expectation and response for this request

                httpBackend.expectPOST('http://mocker.egen.io/users', {}).respond(201, '');
                rootScope.saveMessage('message content');
                expect(userService.resStatus).toEqual(201,{});

            });


        });
    }
)();