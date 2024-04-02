document.addEventListener('DOMContentLoaded', function () {
  // Version
  var manifest = chrome.runtime.getManifest();
  document.getElementById('extensionVersion').textContent = manifest.version;

  // Translation
  document.querySelectorAll('[data-i18n]').forEach(function (elem) {
    let msg = elem.getAttribute('data-i18n');
    elem.textContent = chrome.i18n.getMessage(msg);
  });

  // Event
  document.getElementById('clearData').addEventListener('click', function () {
    var confirmAction = confirm(chrome.i18n.getMessage("confirmationMessage"));
    if (confirmAction) {
      chrome.runtime.sendMessage({ action: "clearData" }, function (response) {
        alert(chrome.i18n.getMessage("clearSuccess"));
      });
    } else {
      alert(chrome.i18n.getMessage("clearAbort"));
    }
  });
});

