var request = require("request");
var sleep = require("sleep");

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 28; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

for(var i = 0; i < 30; i++){
   var time = Math.floor(Math.random() * 10);
   setTimeout(function(){
		console.log("begin to post")
		var openid = makeid()  	
   		console.log(openid);
   		request.post({
   		url:"http://17070.aliyinba.com/Selection/SavaSurvey.ashx", 
   		form:{
   			VoteId: 209, OpenId: openid, ItemId: 3949
   		}
   	}, function(err, httpResponse,body) {
   		if(err) console.log("err" + err);
   		else console.log(body)
   });
   }, time); 
}
