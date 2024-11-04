import {NightwatchTests} from 'nightwatch';

describe('Failing test', function() {
  
  it('should check the webpage title', function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .assert.titleContains('TheWrongTitle');
  });
});
