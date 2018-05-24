'use strict';

userApp.component('userDetailCtrl', {

    controller: function($routeParams, UsersService) {
        let vm = this;
        vm.userLoaded = false;

        vm.user = UsersService.get({
            userId: $routeParams['userId']
        }, function(successResult) {
            // Окей!
            
            vm.notfoundError = false;
            vm.userLoaded = true;
            console.log(vm.userLoaded)
            vm.activeTab = 1;
            vm.disableControlTab = true;
        }, function(errorResult) {
            // Не окей..
            vm.notfoundError = true;
            vm.userLoaded = true;
        });
        vm.user.$promise.then(function(result) {
        //this.userLoaded = true;
        });

        vm.deleteUser = function(userId) {

            vm.user.$delete({
                userId: userId
            }, function(successResult) {
                // Окей!
                vm.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                vm.deletionError = true;
            });

        };
    },
    templateUrl: './src/UserDetail/UserDetail.html'

});
