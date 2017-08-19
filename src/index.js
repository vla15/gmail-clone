angular.module('newmail', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/inbox', {
      templateUrl: 'src/templates/inbox.html',
      controller: 'inboxCtrl'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'src/templates/email.html',
      controller: 'emailCtrl'
    })
    .otherwise({
      redirectTo: '/inbox'
    })
})