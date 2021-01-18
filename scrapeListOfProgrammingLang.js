const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.w3schools.com/'
request(url, (error, response, data) => {
    let webContent = cheerio.load(data);
    let links = webContent('a'); //jquery get all hyperlinks
    webContent(links).each((index, link) => {
        if (webContent(link).text().split(' ')[0].toLowerCase() === "learn"){
            console.log(webContent(link).text() + ':  ' + url + webContent(link).attr('href'));
        }
    });
});
