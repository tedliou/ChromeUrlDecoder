chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = decodeURI(tabs[0].url);
    navigator.permissions.query({
        name: 'clipboard-write'
      }).then(permissionStatus => {
        if(permissionStatus.state == 'granted'){
            navigator.clipboard.writeText(url);
        }
      });
});