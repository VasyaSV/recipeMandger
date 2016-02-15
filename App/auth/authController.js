/**
 * Created by Администратор on 01.02.2016.
 */

modApp.controller("authController",
        ["$scope", "$http", "$cookies", "authService",
        function($scope, $http, $cookies, authService)
    {
        $scope.isAutorized = true;

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
            var auth = $scope.isAutorized;
            if (auth == "true")
                $scope.curUser = ""; // тут надо брать имя врача по сессии (токену)
            else
                $scope.curUser = "";

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