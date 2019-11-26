const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const searchPage = require('../page/searchPage.js');

Given(/^I access Wikipedia site$/, () => {
  return client
    .url('https://www.wikipedia.org/');
});

When(/^I inform ([^"]*) to search$/, (word) => {
  searchPage.fillSearch(word);
  return searchPage.clickSearchButton();
});

Then(/^I am redirect to ([^"]*) page$/, (url) => {
  return searchPage.verifyUrl(url);
});

Then(/^I verify the title ([^"]*)$/, (title) => {
  return searchPage.verifyTitle(title);
});