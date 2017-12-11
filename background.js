
var settings;
var rightMnuId = null;


function startOrRefresh(){
	loadSavedSettings();	
}
startOrRefresh();

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
	  
   if(settings.openInNewTab){ 
   		chrome.tabs.create( { "url": "chrome://settings/networks?type=WiFi" } );    
   } else {
	   //reload in current tab
	   chrome.tabs.update(null, {url:"chrome://settings/networks?type=WiFi"});
   }
	//alert(settings.openInNewTab);
  });
});


function loadSavedSettings() {
	
	// buttonSettings
	if (!window.localStorage.buttonSettings) {
		window.localStorage.buttonSettings = JSON.stringify({ "addToMnu": false, "openInNewTab": true });
	}
	settings = JSON.parse(window.localStorage.buttonSettings);

	// app version
	var currVersion = getVersion();
	var prevVersion = window.localStorage.button_Version;
	if (currVersion != prevVersion) {
		if (typeof prevVersion == 'undefined') {
			
		} else {
			
		}
		window.localStorage.button_Version = currVersion;
	}

}

// Check if this is new version
function getVersion() {
	var details = chrome.app.getDetails();
	return details.version;
}






