const request = require("request");

const options = {
	url: 'https://groups.roblox.com/v1/groups/4960056/wall/posts',
	headers: {
		'Accept': 'application/json, text/plain', 
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US,en;q=0.9',
	    'Content-Length': '13',
	    'Content-Type': 'application/json',
	    'Cookie':'__utmz=200924205.1608961168.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); gig_bootstrap_3_OsvmtBbTg6S_EUbwTPtbbmoihFY5ON6v6hbVrTbuqpBs7SyF_LQaJwtwKJ60sY1p=_gigya_ver3; GuestData=UserID=-1783617027; RBXSource=rbx_acquisition_time=12/25/2020 11:39:23 PM&rbx_acquisition_referrer=https://www.google.com/&rbx_medium=Direct&rbx_source=www.google.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=1; __utma=200924205.995141648.1608961168.1608961168.1609114563.2; __utmb=200924205.0.10.1609114563; __utmc=200924205; .ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_FE3E6ECECFC99F0BDD301859FE56027E2C57FCF3B748239FC2417048540618F4841F54554312BE1A3464B5C60BACA468FBE9A0FBBF0C48D26022C381AC9CABC3A803A9E8EF450B6D44C02BB0E2DC7709A64185C2B4221F522DE7C3972BCE33B166A5BA5128DB545EE440E473FCE90A5A1A709C3221169330D0A55FB83822D4B69675521DF777A8E6CBA09F894E8AC42D9433901E143C33C2676C429B544F6A3AB9E925635C78AD8506BFD1811ECA187FE38983600FCCF082A36212C3E94DAE58FE517D0918A63599BC4E94531B2CECF8E5A1DCBA055949477E5F64C2CB46844B0FC84D3F86EDA614EAFC8C7AA3B2DFCD6AC44B22D750A105AF7386228656EF70B770BF9C5D27A68B3646091737E7A5DA28D98EE9F3CCC3E91248923B92BC96631938B88613F792BC8835B769C313C97F83DB7BF2; .RBXID=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1Yzc0ZTMzZi1jZTViLTRjYTItOTM3MS03NTI3MmQwNmU5MWEiLCJzdWIiOjg3MDE2MDQ2Mn0.1327U41LFZ0RpgrNbgfAPCmUTNjXFDd2LIwfNdFnhH4; RBXEventTrackerV2=CreateDate=12/27/2020 6:17:06 PM&rbxid=2242944798&browserid=72711378591; RBXSessionTracker=sessionid=c7382597-dab6-4ea3-a225-37cb8c20d804',
		
		'Referer': 'https://groups.roblox.com/v1/groups/4960056/wall/posts',
		'Sec-Ch-Ua': "Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"
		'Sec-Ch-Ua-Mobile': '?1',
		'Sec-Fetch-Dest': 'empty',
		'Sec-Fetch-Mode': 'cors',
		'Sec-Fetch-Site': 'same-site',
		'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36',
		'X-Csrf-Token': 'TiBwlIfx2XJb'
	},
	json: true,
	body:
		{
			"hi"
		}
};
request.post(options, (err, res, body) => {
	    if (err) {
		return console.log(err);
	    }
	    console.log(body);
		});
