const cheerio = require("cheerio");
const request = require("request");

const url = "";

request.get(url, (err, response, body) => {
  const $ = cheerio.load(body);
  const viewBody = $("").children();
  const viewBodyLen = viewBody.length;

  for (let i = 0; i < viewBodyLen; i++) {
    console.log(viewBody[i].attribs.src);
  }
});
