const { client } = require('nightwatch-cucumber');

const searchPage = {

    fillSearch: (word) => {
        return client.setValue('#searchInput', word);
    },

    clickSearchButton: () => {
        return client.click('#search-form > fieldset > button');
        // return client.waitForElementNotPresent('css selector', '#search-form > fieldset > button');
    },

    verifyUrl: (url) => {
        return client
            .pause()
            .assert.urlContains(url);
    },

    verifyTitle: (title) => {
        return client.pause(3000).assert.containsText('#firstHeading', title);
    }

}

module.exports = searchPage;