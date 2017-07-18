chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        //if(request.name === "Shift Google"){
            //chrome.extension.getBackgroundPage().console.log('resp.type');
            //console.log("Message recieved");
            var query = 'http://google.com/search?q='+request.searchText;
            chrome.tabs.create({url:query});
            sendResponse({message: ""});
        //}
    }
);