const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^As a player I open page with spin$/, () => {
    return client
        .url('http://slotmachinescript.com/')
        .waitForElementVisible('body', 1000)
});


When(/^I click on the spin button$/, () => {
    client
    .click('#spinButton')
});

Then(/^I see spin cycling finished$/, () => {
    return client.assert.visible('#spinButton')
});


