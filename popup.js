document.getElementById('clearData').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.action.onClicked.dispatch(tabs[0]);
  });
});
