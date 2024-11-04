import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
    'Webpage title test': () => {
      browser
        .url('https://www.thoughtworks.com/radar')
        .assert.titleContains('Technology Radar');
    },
  
    'Webpage navigation test': () => {
      browser
        .url('https://www.thoughtworks.com/radar')
        .waitForElementVisible('[class=\'cmp-header__logo\']')
        .click('[class=\'cmp-header__logo\']')
        .end();
    },

    'Capture console info': () => {
      browser
        .captureBrowserConsoleLogs((event) => {
          console.log(event.type, event.timestamp, event.args[0].value);
        })
        .navigateTo('https://www.thoughtworks.com/radar')
    },
  };
  
  export default home;
  