'use strict';

describe('music app', function() {


  it('should automatically redirect to /main when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/main");
  });


  describe('main', function() {

    beforeEach(function() {
      browser.get('index.html#!/main');
    });


    it('should render main by default and when user navigates to /main', function() {
      /**
       test if landing view has been rendered by testing for the 'Powered by Spotify' text in the first li element
      **/
      expect(element.all(by.css('landing-page header nav li')).first().getText()).
        toMatch(/Powered by Spotify/); 
    });

  });

});
