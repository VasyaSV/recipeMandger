/**
 * Created by Администратор on 01.02.2016.
 */
// Файл описывает подключаемые модули и их зависимости
// TODO: При дабовлении нового модуля нужно записать его в зависимость к mdlApp

// главный модуль приложения
var app = angular.module('modApp', [
    'modAuthByToken',
    'ngResource'
]);

// модуль аутофикации по токену
// модуль описан в controllers/auth.js
var modAuthByToken = angular.module('modAuthByToken', []);
