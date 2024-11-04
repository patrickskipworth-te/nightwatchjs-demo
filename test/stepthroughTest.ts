import {NightwatchTests} from 'nightwatch';

describe('Stepthrough tests', function() {

  it('should slowly navigate the webpage', function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .pause(5000)
      .waitForElementVisible('[class=\'cmp-header__logo\']')
      .click('[class=\'cmp-header__logo\']')
      .assert.titleContains('Thoughtworks')
  });

  it('should open the Nightwatch REPL when not running in parallel', async function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .debug()
      .assert.titleContains('Thoughtworks')
  });
});
