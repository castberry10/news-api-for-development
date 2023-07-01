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
    
    const queryString = req.query;
    const category = queryString.category;

    let filteredData = jsonData.articles; // articles 배열을 기준으로 필터링
  
    if (category) {
        filteredData = filteredData.filter(article => article.category === category);
    }
  
    const responseData = {
        status: 'ok',
        totalResults: filteredData.length,
        articles: filteredData
    };
  
    res.status(200).json(responseData);
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중')
});
