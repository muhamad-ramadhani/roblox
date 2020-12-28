const request = require("request");

const options = {
	url: 'https://groups.roblox.com/v1/groups/5343864/wall/posts',
	headers: {
		'Accept': 'application/json, text/plain', 
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US,en;q=0.9',
	    'Content-Length': '13',
	    'Content-Type': 'application/json',
	    'Cookie':'.RBXID=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3M2I1ODBhNi02NDU4LTQwMzMtOGMwNC1kYTIwYjU3MGU2NjYiLCJzdWIiOjg3MDE2MDQ2Mn0.Hsg_XhjRlZK_hNCfb6JKSZECeKOYZIexLONCeNTMZJg; .ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_B4E6E2E7048B1F50833CE8803E7E27DBF5146A9205B60024E0C187EE4506C1556BA6124FC1A4D3ED280AE20137AD6C9F4EF5C33412DB53A3B22CF84DAFE92440900D1F92B40A97FA840EAB64525D2170C3E809281798DA9AFF1F85E668B4EB942428E6CB60426363621EA3E64DD75C71EF8EF63A2BA3980E4E6921FABF8EB9C40C7C9BDE6B985EFA6E83261AB83A0621B6E287C4510ADF08CDCAC9CD1D0489EDE443CF6438FBCE21B9917D3A42D81CE9710C0320658483818CEFBC2CCC17A5ADF4FE3AA3645BFD462AEAAE9AE0744EF51464D8BEFBE55FB5A96DABC5E9E9E72E4DB36223764CD56104FF4B29A794C7690DBED7BEF95AC26C28F79E4C2F1D429F30E5F6C26088299C7FAC6FCAFA81019958EF1DD9B1464B69423196B045F774AF33296786; gig_bootstrap_3_OsvmtBbTg6S_EUbwTPtbbmoihFY5ON6v6hbVrTbuqpBs7SyF_LQaJwtwKJ60sY1p=_gigya_ver3; GuestData=UserID=-428976844; RBXEventTrackerV2=CreateDate=12/25/2020 9:00:37 PM&rbxid=2242944798&browserid=72691207625; RBXSource=rbx_acquisition_time=12/25/2020 8:48:19 PM&rbx_acquisition_referrer=&rbx_medium=Direct&rbx_source=&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=1; RBXSessionTracker=sessionid=50bf83f0-7a17-4a59-92ba-a467826e4cbc; __utma=200924205.418745429.1608950903.1608960382.1609111528.4; __utmb=200924205.0.10.1609111528; __utmc=200924205; __utmz=200924205.1609111528.4.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); rbx-ip2='
		'Origin': 'https://www.roblox.com',
		'Referer': 'https://groups.roblox.com/v1/groups/5343864/wall/posts',
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