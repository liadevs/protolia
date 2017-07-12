angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('situation', {
    url: '/situation',
    templateUrl: 'templates/situation.html',
    controller: 'situationCtrl'
  })

  .state('choose', {
    url: '/choose',
    templateUrl: 'templates/choose.html',
    controller: 'chooseCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('choice1', {
    url: '/choice1',
    templateUrl: 'templates/choice1.html',
    controller: 'choice1Ctrl'
  })

  .state('choice2', {
    url: '/choice2',
    templateUrl: 'templates/choice2.html',
    controller: 'choice2Ctrl'
  })

  .state('choice3', {
    url: '/choice3',
    templateUrl: 'templates/choice3.html',
    controller: 'choice3Ctrl'
  })

  .state('choice4', {
    url: '/choice4',
    templateUrl: 'templates/choice4.html',
    controller: 'choice4Ctrl'
  })

  .state('choice5', {
    url: '/choice5',
    templateUrl: 'templates/choice5.html',
    controller: 'choice5Ctrl'
  })

  .state('history', {
    url: '/history',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl'
  })

$urlRouterProvider.otherwise('/home')


});