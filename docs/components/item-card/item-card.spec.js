'use strict';

describe('musicApp.item component', function() {

  beforeEach(module('musicApp.item'));
  var $controller;

  
  describe('ItemCardView controller', function(){
    var scope, itemCardViewCtrl;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        itemCardViewCtrl = $controller('ItemCardViewCtrl', {$scope: scope});
    }));

    it('should ....', inject(function($controller) {
      expect(itemCardViewCtrl).toBeDefined();
    }));

  });
});