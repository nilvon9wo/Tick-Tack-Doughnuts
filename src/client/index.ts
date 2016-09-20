/// <reference path='../../declarations/angularjs/angular.d.ts' />
/// <reference path='../../declarations/angularjs/angular-route.d.ts' />

'use strict';

import TicTacToeUIController from './ticTacToe/TicTacToeUIController';

// Declare app level module which depends on views, and components
angular.module('TicTacToeApp', ['ngRoute'])
    .controller('TicTacToeUIController', TicTacToeUIController)
    .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when('/', {
                controller: 'TicTacToeUIController',
                templateUrl: './ticTacToe/tic-tac-toe.html'
            });
    });
