# news-api-for-development

news api를 공부용으로 쓰려고 했는데 
개발툴이 구름ide여서 문제가 생겨버려서(cors..) 만들었다. 

간단하게 서버에 get 요청하면 newsapi처럼 응답하는 서버. 

(법쪽으로) 혹시 몰라서 언제 요청하든 뉴스의 종류는 변하지않는다. 

[ https://newsapi.org/ ]

# 사용방법

app.js, package.json과 같은 경로에서 

  npm install 

  npm start 

3000포트에서 서버가 열린다. 

서버 url:3000에 get요청을 보내면 임시로 개발에 쓸 수 있는 newsapi 예시가 응답된다.  

-- 2023 7월 1일 

?category= . . . 


category 쿼리를 사용할 수 있다. 
(business, sports, health 등 .. ) 

## 만들어서 사용한곳 

react 공부하려고 만든 뉴스뷰어

[ https://github.com/castberry10/react-study/tree/main/news-viewer ]
