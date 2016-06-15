/* jshint -W117, -W030 */
describe('demo routes', function() {
  describe('state', function() {
    var view = 'app/demo/demo.html';

    beforeEach(function() {
      module('app.demo', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state demo to url /demo ', function() {
      expect($state.href('demo', {})).to.equal('/demo');
    });

    it('should map /demo route to demo View template', function() {
      expect($state.get('demo').templateUrl).to.equal(view);
    });

    it('of demo should work with $state.go', function() {
      $state.go('demo');
      $rootScope.$apply();
      expect($state.is('demo'));
    });
  });
});
