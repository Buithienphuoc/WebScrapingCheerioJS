const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.w3schools.com';
request(url, (error, response, body) => {
    let keyword = 'Java'
    let webContent = cheerio.load(body);
    let links = webContent('a'); //jquery get all hyperlinks
    webContent(links).each((index, link) => {
        if (webContent(link).text().toLowerCase() === keyword.toLowerCase()){
            console.log(webContent(link).text() + ':  ' + url + webContent(link).attr('href'));
            console.log("Index: " + index + "\n")
        }
    });
});