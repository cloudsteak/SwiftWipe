document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clearData').addEventListener('click', function() {
      chrome.runtime.sendMessage({action: "clearData"});
  });
});

