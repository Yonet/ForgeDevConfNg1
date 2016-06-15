/* jshint -W117, -W030 */
describe('demoController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.demo');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('demoController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('demo controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of demo', function() {
        expect(controller.title).to.equal('demo');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
