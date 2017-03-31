'use strict';

describe('musicApp.landing component', function() {

  beforeEach(module('musicApp.landing'));

  describe('LandingViewCtrl controller', function(){
    var scope, landingViewCtrl;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        landingViewCtrl = $controller('LandingViewCtrl', {$scope: scope});
    }));

    it('should ....', inject(function($controller) {
      //spec body
      expect(landingViewCtrl).toBeDefined();
    }));

  });
});