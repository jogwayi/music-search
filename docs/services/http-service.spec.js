'use strict';

describe('musicApp.http service', function() {

  beforeEach(module('musicApp.http'));
  
  describe('SearchSessionService service', function(){
    var searchSessionService;
    beforeEach(inject(function(_SearchSessionService){
      searchSessionService = _SearchSessionService;
    }));
    it('should ....', inject(function($service) {
      expect(searchSessionService).toBeDefined();
    }));

  });
});
