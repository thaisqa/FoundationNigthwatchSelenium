## Intro
This is a simple demo for running tests using Cucumber and Nightwatch. There is
also a [tutorial](https://moduscreate.com/blog/writing-e2e-tests-with-nightwatch-cucumber/)
available.

## Setup & Run
Make sure you have all dependencies installed with `npm install`.
You can then run tests with `npm test`.

## Troubleshooting
If you already have chromedriver installed (via Homebrew, for example) then you
may see an error when installing chromedriver with `npm install`. You can point
`webdriver.chrome.driver` in the config file to your chromedriver path (**/usr/local/bin/chromedriver**).

Make sure to comment out `const chromedriver = require('chromedriver');` if you do this.
