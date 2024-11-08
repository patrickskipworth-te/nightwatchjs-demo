# nightwatchjs-demo
Files for a demo of NightwatchJS

## Items included to demo
```
basicBrowserTest.ts
```
Basic test example

```
describeTest.ts
```
Test example with Mocha syntax

```
failingTest.ts
```
Test example which always fails

```
inspectorTest.ts
```
Test example which opens Nightwatch Inspector when run in debug mode

```
multiBrowserTest.ts
```
Test example with different results dependent on which browser it runs in

```
recordedTest.js
```
Test example created with the Google Chrome DevTools Recorder

```
stepthroughTest.ts
```
Test example which demonstrates the slow pause and debug functions

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
