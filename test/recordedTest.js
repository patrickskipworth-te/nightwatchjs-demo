describe("Nighwatch1", function () {
it("tests Nighwatch1", function (browser) {
  browser.windowRect({width: 1084, height: 906})
  .navigateTo("https://the-internet.herokuapp.com/")
  .click("li:nth-of-type(10)")
  .click("li:nth-of-type(6) > a")
  .click("input:nth-of-type(1)")
  .click("input:nth-of-type(2)")
  .click("h3")
  .navigateTo("https://the-internet.herokuapp.com/")
  .click("li:nth-of-type(19) > a")
  .click("li:nth-of-type(2) > a")
  .click("li:nth-of-type(3) > a")
  .navigateTo("https://the-internet.herokuapp.com/floating_menu#news")
  .navigateTo("https://the-internet.herokuapp.com/floating_menu")
  .navigateTo("https://the-internet.herokuapp.com/")
  .click("li:nth-of-type(24) > a")
  .setValue("input", "4")
  .click("input")
  .setValue("input", "0")
  .end();
  });
});
