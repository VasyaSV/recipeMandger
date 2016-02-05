/**
 * Created by Администратор on 01.02.2016.
 */
// Файл описывает подключаемые модули и их зависимости
// TODO: При дабовлении нового модуля нужно записать его в зависимость к mdlApp

// главный модуль приложения
angular.module('modApp', [
    'modAuthByToken'
]);

// модуль аутофикации по токену
// модуль описан в controllers/auth.js и Rest/authRest.js
var modAuthByToken = angular.module('modAuthByToken', [
    "ngCookies"
]);
