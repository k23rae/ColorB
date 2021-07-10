//allows to get info from current chrome tab
chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  var ImageFormat = { format: "png", quality: 100 };
  chrome.tabs.captureVisibleTab(null, ImageFormat, dataURI => {//pixel grab code here})
    
}