/*
 * @providesModule NewsAPI
 *
 */
'use strict';

const API_KEY =  'dfe0cf0076b8b7a7b8466b99ffc05665'
const SOCAIL_URL = 'http://apis.baidu.com/txapi/social/social'
const SPORT_URL = 'http://apis.baidu.com/txapi/tiyu/tiyu'
const KEJI_URL = 'http://apis.baidu.com/txapi/keji/keji'
const WORLD_URL = 'http://apis.baidu.com/txapi/world/world'


var NewsAPIS = {
   sports_News_Fetch:function(num,page,callback) {
     var sportUrl = SPORT_URL + '?' + 'num=' + num + '&page=' + page;
     this.news_Fetch(sportUrl,num,page,callback);
  },

  social_News_Fetch:function(num,page,callback) {
    var socialUrl = SOCAIL_URL + '?' + 'num=' + num + '&page=' + page;
    this.news_Fetch(socialUrl,num,page,callback);
 },
  keji_News_Fetch:function(num,page,callback) {
   var kejiUrl = KEJI_URL + '?' + 'num=' + num + '&page=' + page;
   this.news_Fetch(kejiUrl,num,page,callback);
},
  world_News_Fetch:function(num,page,callback) {
    var worldlUrl = WORLD_URL + '?' + 'num=' + num + '&page=' + page;
    this.news_Fetch(worldlUrl,num,page,callback);
},
 news_Fetch:function(url,num,page,callback){
   fetch(url,{
     method:'GET',
     headers:{
       'apikey':API_KEY
     }
   })
     .then((response) => response.text())
     .then((responseText) => {
      if (callback) {
        callback(responseText);
      }
     })
     .catch((error) => {
       console.warn(error);
       if (callback) {
         callback(error);
       }
     });
 },

};

module.exports = NewsAPIS;
