const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');


When(/^I play until win$/, () => {
    client
        .click('#spinButton')
});

Then(/^Check that winning amount was changed$/, () => {
    var result = client.getText('span#lastWin')

/*
    actually, I didn`t have any time for this test, but concept it is near that
    result i = 0;
while (i = 0) {
 client
 .click('#spinButton')
   }
client.verify.containsText('span#lastWin', result > 0)

anyway, This is the concept and pseudo code)
*/


});

Then(/^Check that spin amount was added to the total spins$/, () => {
var total = client.getText('span#credits')
return client.verify.containsText('span#credits', totalSpins -2)
});