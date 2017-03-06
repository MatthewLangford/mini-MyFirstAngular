angular.module('friendsList').controller('mainCtrl', function ($scope) {
    $scope.friends = ['jon', 'david', 'andrew', 'james', 'stephen'];

    $scope.addFriend = function (friend) {

        $scope.friends.push(friend);
        $scope.newFriend = '';
    }
});
