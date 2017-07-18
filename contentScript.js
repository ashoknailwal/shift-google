var dbShiftKey = 0;
document.onkeyup = function(){
    if(dbShiftKey != 0 && event.keyCode == 16 ){
        //console.log("Message sending");
        chrome.runtime.sendMessage({searchText: window.getSelection().toString(), name:"Shift Google"}, null);
        
    }else{
        dbShiftKey = setTimeout('dbShiftKey = 0;', 300);
    }
}