const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');


When(/^I play until win$/, () => {
    client
        .click('#spinButton')
});

Then(/^Check that winning amount was changed$/, () => {
    var result = client.getText('span#lastWin')
    browser.expect.element("span#lastWin").text.to.contain('number');
});

Then(/^Check that spin amount was added to the total spins$/, () => {
    var total = client.getText('span#credits')
    return client.verify.containsText('span#credits', totalSpins -2)
});