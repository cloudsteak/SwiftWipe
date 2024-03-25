chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Üzenet érkezett a popup-tól:", request);
  if (request.action === "clearData") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          const tab = tabs[0];
          chrome.cookies.getAll({url: tab.url}, function(cookies) {
              cookies.forEach(function(cookie) {
                  var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
                  chrome.cookies.remove({url: url, name: cookie.name});
              });
          });

          chrome.scripting.executeScript({
              target: {tabId: tab.id},
              function: clearSessionStorage
          });
      });

      sendResponse({result: "success"});
  }
  return true; // Async response
});

function clearSessionStorage() {
  sessionStorage.clear();
}
