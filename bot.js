let HTTPS = require('https');

const botID = process.env.BOT_ID;
const classID = process.env.PIAZZA_CLASS_ID;

function respond() {
  let request = JSON.parse(this.req.chunks[0]),
      botRegex = /(?:🍕|\u{fffd}|piazza)\s*@(\d+)/iu;

  let match = null;
  if (request.text) {
    const match_obj = request.text.match(botRegex);
    if (match_obj) {
      match = match_obj[1];
    }
  }

  if (request.text && match) {
    this.res.writeHead(200);
    postMessage(match);
    this.res.end();
  } else {
    console.log(request.text);
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(match) {
  let botResponse, options, body, botReq;

  botResponse = `https://piazza.com/class/${classID}?cid=${match}`;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;