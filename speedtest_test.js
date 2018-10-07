const moment = require('moment');
const formattedDateTime = moment()
        .format('YYYY-MM-DD-HH.mm.ss');

Feature('Speedtest test.js');

Scenario('test something', async (I) => {
    I.amOnPage('https://speedtest.net');
    I.wait(2);
    I.resizeWindow(1200,800);
    I.click('#_evidon-banner-acceptbutton')
    I.scrollTo('.js-start-test')
    I.click('.js-start-test')
    I.waitForVisible('.result-data', 60)
    I.wait(5)
   
    const pingSpeed = await I.grabHTMLFrom('.ping-speed')
    const downloadSpeed = await I.grabHTMLFrom('.download-speed')
    const uploadSpeed = await I.grabHTMLFrom('.upload-speed')
    
    I.saveScreenshot(getScreenShotFilename(pingSpeed, 
        downloadSpeed, 
        uploadSpeed, 
        formattedDateTime))
});

const getScreenShotFilename = (ping, downloadSpeed, uploadSpeed, formattedDateTime) => {
    return `${formattedDateTime}_PING-${ping}_DOWN-${downloadSpeed}_UP-${uploadSpeed}.png`;
}
