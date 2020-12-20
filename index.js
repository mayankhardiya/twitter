var Twit = require('twit');
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();

const apikey = 'GH0jU8MTxizxZU4RyDdxlCpCK'
const apiSecretKey = 'O6T2IqkW9QH80dUf3Vxzn8YHXcUpJcg0TPj1rHmplzJGnbMKxR'
const accessToken = '1340375810209796102-pruqUqfEULope86Lhupg3THA0Mwvif'
const accessTokenSecret = 'zZjxyLZimW8DT1bMSL6EIDC0GvtLWTO6gDC1cJqRJOORn'

var T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret
})

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.render('index', { data: 0 });

});


app.post('/tweets', (req, res) => {

    var test = req.body.search

    T.get('search/tweets', { q: `${test} since:2020-12-12`, count: 25 }, function (err, data, response) {

        if (err) {

            console.log(err)

        } else {

            console.log(data.statuses);

            res.render('index', { data: data.statuses });

        }
    })

});


const port = process.env.PORT || 4500;

app.listen(port, () => {

    console.log(`listening on port 4500`);

});
