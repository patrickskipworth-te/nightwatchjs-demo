import {NightwatchTests} from 'nightwatch';

describe('Describe and It syntax tests', function() {
  
  it('should check the webpage title', function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .assert.titleContains('Technology Radar');
  });

  it('should navigate the webpage', function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .waitForElementVisible('[class=\'cmp-header__logo\']')
      .click('[class=\'cmp-header__logo\']')
      .end();
  });

  it('should capture console info', function(browser: NightwatchTests) {
    browser
      .captureBrowserConsoleLogs((event: any) => {
        console.log(event.type, event.timestamp, event.args[0].value);
      })
      .navigateTo('https://www.thoughtworks.com/radar');
  });

});
