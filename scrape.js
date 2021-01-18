const request = require('request')
const cheerio = require('cheerio')

request('https://www.w3schools.com/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const cheerioLoad = cheerio.load(html)
        const tutorialClass = cheerioLoad('.w3-bar-block')
        // HTML of the Tutorial Menu Bar
        const tutorialListHtml = tutorialClass.html()
        console.log(tutorialListHtml)
        console.log('----------------------------------------')
        // Text of the Tutorial Menu Bar
        const tutorialListText = tutorialClass.text()
        console.log(tutorialListText)
        console.log('Type of the text:' + typeof tutorialListText)
        const listTutorialName = tutorialListText.split('\n')
        let resultList = []
        let tutorialName
        for (tutorialName of listTutorialName){
            if (tutorialName.split(' ')[1] === "Learn"){
                resultList.push(tutorialName)
            }
        }
        console.log(resultList)
        console.log(resultList.length)
        console.log('----------------------------------------')
        // Find H1
        const h1Tag = tutorialClass.find('h1').text()
        console.log(h1Tag)
        console.log('----------------------------------------')
        // Children
        const child = tutorialClass.children('h1').text()
        console.log(child)
    }
})