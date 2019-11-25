const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const mongoDB = 'mongodb+srv://dave122345:Seahaven1@cluster0-7lgmd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    year: String,
    poster: String,
    price: String

})

const GameModel = mongoose.model('game', gameSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/games', (req, res) => {

    GameModel.find((error, data) => {
        res.json({ games: data });
    })

})

app.get('/api/game/:id', (req, res) => {
    console.log(req.params.id);

    GameModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/games/:id', (req, res) => {
    console.log("Edit " + req.params.id);

    GameModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })

    console.log(req.body);
})

app.delete('/api/games/:id', (req, res) => {
    console.log(req.params.id);

    GameModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })

})

app.post('/api/games', (req, res) => {
    console.log('Post request Successful!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    console.log(req.body.price);

    GameModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster,
        price: req.body.price
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))