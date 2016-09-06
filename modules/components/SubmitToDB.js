fetch('https://davidwalsh.name/submit-json', {
	method: 'post',
	body: JSON.stringify({
		email: document.getElementById('email').value
		answer: document.getElementById('answer').value
	})
});

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res){
    console.log('GET /')
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)


client

componentDidMount() {
    fetch('/api/latest-bills').then((response) => {
        return response.json();
    }).then((data) => {
        this.setState({items: data.items});
    }).catch((err) => {
        throw new Error(err);
    });
  }


  const routeManager = Object.assign({}, baseManager, {
    ...
    createPageRouter() {
        const router = express.Router();

        router.get('*', (req, res) => {
        // match URL to our application's routes
        match({routes, location: req.originalUrl}, (err, redirect, renderProps) => {
            // we just retrieve latest bills, as it is the only one we have
            this.retrieveLatestBills((err, data) => {
                if(!err) {
                    // render the HTML
                    const html = this.render(renderProps, data);
                    // delive the HTML to the browser
                    res.render('index', {
                        content: html,
                        context: data
                    });
                } else {
                    res.status(500).send();
                }
            });
        });


        ///working example
        var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};

fetch('/echo/json/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'x-www-form-urlencoded'
    },
    body: 'json=' + encodeURI(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});

//source http://stackoverflow.com/questions/29775797/fetch-post-json-data
