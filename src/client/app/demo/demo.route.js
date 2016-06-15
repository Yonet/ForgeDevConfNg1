(function() {
  'use strict';

  angular
    .module('app.demo')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'demo',
        config: {
          url: '/demo',
          templateUrl: 'app/demo/demo.html',
          controller: 'DemoController',
          controllerAs: 'vm',
          title: 'Demo',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Demo'
          }
        }
      }
    ];
  }
})();
