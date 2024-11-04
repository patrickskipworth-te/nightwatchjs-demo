import {NightwatchTests} from 'nightwatch';

describe('Stepthrough tests', function() {

  it('should open the Nightwatch REPL when not running in parallel', async function(browser: NightwatchTests) {
    browser
      .url('https://www.thoughtworks.com/radar')
      .debug()
      .assert.titleContains('Thoughtworks')
  });
});
