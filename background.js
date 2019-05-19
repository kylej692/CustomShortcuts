var shortcuts = [];
function getShortcutsAndRestore(){
  chrome.storage.local.get({shortcuts:[]},function(data){
      shortcuts = data.shortcuts;
  });
}
getShortcutsAndRestore();
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message === "shortcut1") {
    shortcuts[0] = request.value;
  } else if(request.message === "shortcut2") {
    shortcuts[1] = request.value;
  } else if(request.message === "shortcut3") {
    shortcuts[2] = request.value;
  } else if(request.message === "shortcut4") {
    shortcuts[3] = request.value;
  } else if(request.message === "shortcut5") {
    shortcuts[4] = request.value;
  } else if(request.message === "shortcut6") {
    shortcuts[5] = request.value;
  } else if(request.message === "shortcut7") {
    shortcuts[6] = request.value;
  } else if(request.message === "shortcut8") {
    shortcuts[7] = request.value;
  }
})

chrome.commands.onCommand.addListener(function(command) { 
  if(command === "Shortkey-1" && shortcuts[0] != undefined) {
    chrome.tabs.create({'url': shortcuts[0]});
  } else if (command === "Shortkey-2" && shortcuts[1] != undefined) {
      chrome.tabs.create({'url': shortcuts[1]});
  } else if (command === "Shortkey-3" && shortcuts[2] != undefined) {
      chrome.tabs.create({'url': shortcuts[2]});
  } else if (command === "Shortkey-4" && shortcuts[3] != undefined) {
      chrome.tabs.create({'url': shortcuts[3]});
  } else if (command === "Shortkey-5" && shortcuts[4] != undefined) {
      chrome.tabs.create({'url': shortcuts[4]});
  } else if (command === "Shortkey-6" && shortcuts[5] != undefined) {
      chrome.tabs.create({'url': shortcuts[5]});
  } else if (command === "Shortkey-7" && shortcuts[6] != undefined) {
      chrome.tabs.create({'url': shortcuts[6]});
  } else if (command === "Shortkey-8" && shortcuts[7] != undefined) {
      chrome.tabs.create({'url': shortcuts[7]});
  }
});