'use strict';
(function() {
  const networkFilters =  {
    urls: [
      "*://localhost*",
      "*://www.google.com/*"
    ]
  }
  chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log('this is a test to see if this works');
  }, networkFilters);
});
