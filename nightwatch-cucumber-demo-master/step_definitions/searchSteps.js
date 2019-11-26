const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const searchPage = require('../page/searchPage.js');

Given(/^I open SulAmerica portal$/, () => {
  return client
    .url('https://saude.sulamericaseguros.com.br/segurado/login/');
});


Given(/^I login as segurado$/, () => {
  searchPage.loginByCode();
  return searchPage.verifyNameLoged('RICARDO');
});

Given(/^I open Search Newtwork page$/, () => {
  return searchPage.openSearchNetwork();
});

Given(/^I select to search by locality$/, () => {
  return searchPage.serchByLocality();
});

When (/^I click on search button$/, () => {
  return searchPage.clickSearchButton();
});

When(/^I fill the category field with (.*?)$/, (category) => {
  return searchPage.fillCategory(category);

});

When(/^I fill the state field with (.*?)$/, (state) => {
  return searchPage.fillState(state);
});

When(/^I fill the city field with (.*?)$/, (city) => {
  return searchPage.fillState(city);
});

When(/^I fill the specialty field with (.*?)$/,  (specialty) => {
  return searchPage.fillState(specialty);
});

Then(/^I verify the city (.*?) of address result$/,  (city) => {
  searchPage.verifyCityResult(city);
});