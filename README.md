# nightwatchjs-demo
Files for a demo of NightwatchJS

## Running the sample tests
Run all tests with current default setting `from nightwatch.conf.js`:
```
npx nightwatch
```
Run a single sample test file:
```
npx nightwatch test/testFileName.ext
```
Run sample tests in parallel with multiple browsers at once:
> N.B. running tests in parallel will prevent use of the `.debug()` function and the Nightwatch REPL
```
npx nightwatch test/ --env firefox,chrome
```
Run a single sample test in `debug` mode to enable Nightwatch Inspector in browser:
> N.B. requires insert `.debug()` into the test file
```
npx nightwatch /test/testFileName.ext --env chrome --debug
```
