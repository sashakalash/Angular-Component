'use strict';

userApp.component('userList', {

    controller: function UserListCtrl(UsersService, $mdDialog) {

        this.users = UsersService.query();

    },

    templateUrl: './src/UserList/UserList.html'

});
