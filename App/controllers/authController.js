/**
 * Created by Администратор on 01.02.2016.
 */

var authController = modAuthByToken.controller('authController', function($scope, $http)
{
    $scope.login = function()
    {

        //Restangular.all

        $http.get('http://localhost:3000/', 'ONO GIVOE!!! GIVOE!!!','KAKOYTO KONFIG')
            .success(function(data, status, headers, config){
            $scope.name = 'Данные: ' + data + 'Статус: ' + status + 'Хедерс: ' + headers + 'Конфиг: ' + config;


                alert("OPA GANDAM STYLE!");
        });

        //Restangular.all('sessions').post("some")


    };

});