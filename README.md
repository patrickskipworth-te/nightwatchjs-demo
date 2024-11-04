# nightwatchjs-demo
Files for a demo of NightwatchJS

## Running the sample tests
Run a single sample test file:

`npx nightwatch test/testFileName.ext`

Run sample tests in parallel with multiple browsers at once:

`npx nightwatch test/ --env firefox,chrome`

N.B. running tests in parallel will prevent use of the `.debug()` function and the Nightwatch REPL
