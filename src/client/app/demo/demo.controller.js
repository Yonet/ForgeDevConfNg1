(function() {
  'use strict';

  angular
    .module('app.demo')
    .controller('DemoController', DemoController);

  DemoController.$inject = ['logger'];
  /* @ngInject */
  function DemoController(logger) {
    var vm = this;
    vm.title = 'WebGL Demo';

    activate();

    function activate() {
      logger.info('Activated Demo View');
    }
  }
})();
