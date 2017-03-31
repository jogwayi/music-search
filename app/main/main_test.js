'use strict';

describe('musicApp.main module', function() {

  beforeEach(module('musicApp.main'));

  describe('main controller', function(){
    var scope, mainViewCtrl;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        mainViewCtrl = $controller('MainViewCtrl', {$scope: scope});
    }));

    it('should ....', inject(function($controller) {
      expect(mainViewCtrl).toBeDefined();
    }));

  });
});