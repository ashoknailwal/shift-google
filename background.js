chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        //if(request.name === "Shift Google"){
            //chrome.extension.getBackgroundPage().console.log('resp.type');
            //console.log("Message recieved");
            var str = request.searchText;
            if(str != null && str.length != 0){
            	console.log(str.length);
            var query = 'http://google.com/search?q='+request.searchText;
            chrome.tabs.create({url:query});
        }
            sendResponse({message: ""});
        //}
    }
);