/**
 * Created by Администратор on 01.02.2016.
 */
// Файл описывает подключаемые модули и их зависимости
// TODO: При дабовлении нового модуля нужно записать его в зависимость к mdlApp

// главный модуль приложения
var modApp = angular.module('modApp', [
    "ngRoute",
    "ngCookies"
]);

modApp.config(["$routeProvider", function($routeProvide)
    {

        $routeProvide
            .when('/homePage',
                {
                    templateUrl: 'home/home.html',
                    controller: "controllerApp"
                })
            .when('/printRecipe',
                {
                    templateUrl: 'recipePrint/recipePrint.html',
                    controller: "recipePrintController"
                })
            .otherwise({
                redirectTo: "/homePage"
            })
    }

    ]);
    // контроллер навигации по приложению

modApp.controller("controllerApp", ["$scope", function($scope)
    {
      /*  $scope.goToRecipePrint = function()
        {
            $location.url("/printRecipe");
        }
*/
    }

    ]);



// модуль аутофикации по токену
