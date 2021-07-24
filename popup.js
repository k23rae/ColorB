document.addEventListener('DOMContentLoaded', function() {
var checkPageButton = document.getElementById('checkPage');
checkPageButton.addEventListener('click', function() {

var x = chrome.tabs.captureVisibleTab(null, function(tab) {


});
}, false);
}, false);

