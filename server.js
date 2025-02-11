process.on('uncaughtException', function (err) {
    console.log(err);
  });

const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const log = require('./libs/log')(module);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
// app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get( '/express_backend', (req, res) => {
    res.send({ message: "Это стартовая страница нашего приложения" });
    
})

app.get('/api/articles', function(req, res) {
    res.send('This is not implemented now1');
});

app.post('/api/articles', function(req, res) {
    res.send('This is not implemented now2');
});

app.get('/api/articles/:id', function(req, res) {
    res.send('This is not implemented now');
});

app.put('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');    
});

app.delete('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');
});

app.listen(port, ()=>console.log(`Listening on port ${port}`))

// app.use((req, res, next)=>{
//     res.status(404);
//     log.debug('Not found URL: %s',req.url);
//     res.send({ error: 'Not found' });
//     return;
// });

// app.use((err, req, res, next)=>{
//     res.status(500);
//     // log.debug('Internal error(%d): %s',res.statusCode,err.message);
//     res.send({ error: res.statusCode,
//         typeof: err.message });
//     return;
// });