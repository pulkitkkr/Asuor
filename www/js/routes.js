angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.feeds', {
    url: '/feeds',
    views: {
      'tab1': {
        templateUrl: 'templates/feeds.html',
        controller: 'feedsCtrl'
      }
    }
  })

  .state('tabsController.addToInventory', {
    url: '/add_inventory',
    views: {
      'tab2': {
        templateUrl: 'templates/addToInventory.html',
        controller: 'addToInventoryCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/chat',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.inventory', {
    url: '/inventory',
    views: {
      'tab4': {
        templateUrl: 'templates/inventory.html',
        controller: 'inventoryCtrl'
      }
    }
  })

  .state('tabsController.requirement', {
    url: '/requirement',
    views: {
      'tab5': {
        templateUrl: 'templates/requirement.html',
        controller: 'requirementCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/sign_up',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});