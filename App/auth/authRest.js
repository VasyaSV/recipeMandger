/**
 * Created by Администратор on 03.02.2016.
 */
var authService = modApp
    .service('authService', function($http, $cookies) {
        'use strict';

        var serverURL = "http://localhost:3000/";
        var self = this;

        this.loginByCredentials = function(username, password) {
            var loginPasJSon = { email: username, password: password };


            $http.post(serverURL+"login", loginPasJSon)
                .success(function(data, status, headers, config){
                    // далее надо залогиниться по токену
                    $cookies.accessToken = data;
                });
            return;
        };

        this.checkToken = function(atorize) {
            var curToken = $cookies.accessToken;
            $http.get(serverURL+'checkToken', curToken)
                .success(function(data, status, headers, config){
                    alert("data is " + data.toString());
                    atorize(data);
                    return data;
            });
            return false;
        };


        this.logout = function(atorize) {
            //Restangular.all('sessions').remove();
            var curToken = $cookies.accessToken;
            $cookies.accessToken = '';
            atorize(false);
            $http.delete(serverURL+'logout', curToken)
                .success(function(data, status, headers, config){
            });
            return;
        };
    });