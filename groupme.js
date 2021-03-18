var temp = "";
var old = "";
var id = 0;
var check = false;
var checkblocked = 0;
var usertoTrack1 = 0; //userid to track
var usertoTrack2 = 0; //userid to track
var phrase = "": //phrase to check
var group = ""; //maingroup
var accesstoken = ""; //access token

setInterval (function(){
	getMessages();
}, 	5000);

function getMessages() {
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var oReq = new XMLHttpRequest();

	oReq.addEventListener("load", newlink, false);
	oReq.open("GET", "https://api.groupme.com/v3/groups/" + group + "/messages?acceptFiles=1&limit=1");
	oReq.setRequestHeader("X-Access-Token", "" + accesstoken);
	oReq.send();
};

function newlink () {
	if (this.status != 200) 
	{
		console.log("Blocked?");
		checkblocked += 1;
		if (checkblocked == 10)
		{
			console.log("IP blocked - API call to spin up new instance");
		}
	}
	else {
		temp = JSON.parse(this.responseText);
		if (check == false)
		{
			old = temp.response.messages[0];
			check = true;
		}
		if (old.id != temp.response.messages[0].id && ((temp.response.messages[0].user_id == usertoTrack1 || temp.response.messages[0].user_id == usertoTrack2) || temp.response.messages[0].text.toLowerCase().includes(phrase)))
		{
			id = temp.response.messages[0].id;
			like(id);
		}
		console.log(temp.response.messages[0]);
		old = temp.response.messages[0];
	}
}

function like (id) {
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var oReq = new XMLHttpRequest();

	oReq.addEventListener("load", likelink, false);
	oReq.open("POST", "https://api.groupme.com/v3/messages/" + group + "/" + id + "/like");
	oReq.setRequestHeader("X-Access-Token", "" + accesstoken);
	oReq.send();
}

function likelink()
{
	if (this.status != 200) 
	{
		console.log("Blocked?");
		checkblocked += 1;
		if (checkblocked == 10)
		{
			console.log("IP blocked - To do: API call to spin up new instance");
		}
	}
	else {
		console.log("success");
	}
}
