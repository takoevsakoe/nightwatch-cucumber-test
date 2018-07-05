const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');


When(/^Change bet for the 2 points$/, () =>  {
    client
        .click('#betSpinUp')
    var totalSpins = client.getText('span#credits')
    console.log(totalSpins)
});

When(/^Play the round$/, () => {
    client
        .click('#spinButton')
});

Then(/^Verify the bet is changing$/, () => {
    return client.expect.element('span#bet').text.to.contains('2')
});


Then(/^Verify total spins count$/, () => {
    var total = client.getText('span#credits')
    return client.verify.containsText('span#credits', totalSpins -2|| total > totalSpins)
});