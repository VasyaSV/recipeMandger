/**
 * Created by Администратор on 01.02.2016.
 */

var authController = modAuthByToken
    .controller("authController",
        ["$scope", "$http", "$cookies", "authService",
        function($scope, $http, $cookies, authService)
    {
        $scope.isAutorized = false;

        $scope.curUser = "Admin";

        var autorize = function(state)
        {
            // Грёбаные преобразования типов в яве!!!
            if (state == "true")
                $scope.isAutorized = true;
            else
                $scope.isAutorized = false;
        };

        $scope.init = function()
        {
            authService.checkToken(autorize);
        };

        $scope.login = function(name, pass)
        {
            $scope.curUser = name; // Есть возможно сть как то видоизменить логин
            authService.loginByCredentials(name, pass);
            authService.checkToken(autorize);
        };

        $scope.logout = function()
        {
            authService.logout(autorize);
        };

    }]
);