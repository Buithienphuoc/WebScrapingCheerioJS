const request = require('request')
const cheerio = require('cheerio')

request('https://www.w3schools.com/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const cheerioLoad = cheerio.load(html)
        // How to use this : cheerioLoad(className)
        const tutorialClass = cheerioLoad('.w3-bar-block');
        // const tutorialClass = cheerioLoad('a')
        // HTML of the Tutorial Menu Bar
        const tutorialListHtml = tutorialClass.html()
        console.log(tutorialListHtml)
        const tutorialText = tutorialClass.text()
        const tutorialURL = tutorialClass.
        console.log("Text:" + tutorialText)
        console.log("Links:" + tutorialURL)

    }
})