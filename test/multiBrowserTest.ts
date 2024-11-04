import { NightwatchTests } from 'nightwatch';

describe('Multi-browser tests', function() {

  it('should check the browser type', function(browser: NightwatchTests) {
    const expectedBrowser = 'chrome';

    browser
      .assert.equal(browser.browserName, expectedBrowser);
  });
});
