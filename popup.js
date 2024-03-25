document.addEventListener('DOMContentLoaded', function () {
  // Translation
  document.querySelectorAll('[data-i18n]').forEach(function (elem) {
    let msg = elem.getAttribute('data-i18n');
    elem.textContent = chrome.i18n.getMessage(msg);
  });

  // Event
  document.getElementById('clearData').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "clearData" });
  });
});

