const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const cors=require("cors");
const config=require("./config");
const Twitter=require("twitter");

let twitter=new Twitter(config);

app.use(bodyParser.json());
app.use(cors());

app.get("/getTweets",(req,res)=>{
  let tweetArray=[];
twitter.get("statuses/user_timeline",{count:25,screen_name:"Reuters"},(err,tweet)=>{
  for (var i = 0; i < tweet.length ; i++) {
    let body={
                     "text":tweet[i].text,
                     "userScreenName":tweet[i].user.screen_name,
                     "userImage":tweet[i].user.profile_image_url_https,
                     "description":tweet[i].user.description
                   }
    tweetArray.push(body);             
  }
  res.send(tweetArray);
})
})



app.listen(port, () => {
    console.log('server is up',port);
});