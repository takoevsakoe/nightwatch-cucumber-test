const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');


When(/^Change bet for the 2 points$/, () => {
    client
        .click('#betSpinUp')
});

When(/^Play the round$/, () => {
    client
        .click('#spinButton')
});


Then(/^Verify total spins count$/, () => {
    return client
        .assert('#bet>span').contains(2)
});