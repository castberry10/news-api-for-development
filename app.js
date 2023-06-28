const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const fs = require('fs');

const jsonFile = fs.readFileSync('./news.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

app.use(morgan('dev'))
app.use(cors({
    origin: '*',
}));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.status(200).json(jsonData);    
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중')
});
