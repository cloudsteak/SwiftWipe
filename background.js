chrome.action.onClicked.addListener((tab) => {
  const { id: tabId, url } = tab;
  if (!url.startsWith('http')) {
    console.log('Nem weboldal.');
    return;
  }

  chrome.cookies.getAll({ url }, (cookies) => {
    cookies.forEach(cookie => {
      chrome.cookies.remove({ url: cookie.secure ? `https://${cookie.domain}${cookie.path}` : `http://${cookie.domain}${cookie.path}`, name: cookie.name });
    });
  });

  chrome.scripting.executeScript({
    target: { tabId },
    function: clearSessionStorage
  });
});

function clearSessionStorage() {
  sessionStorage.clear();
}
