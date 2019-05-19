var shortcuts = [];
document.addEventListener('DOMContentLoaded', function() { 
  getShortcutsAndRestoreInDom();
  document.getElementById('saveShortcut1').addEventListener('click', function() {
    shortcuts[0] = document.getElementById("shorcut1").value;
    chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut2').addEventListener('click', function() {
    shortcuts[1] = document.getElementById("shorcut2").value;
    chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut3').addEventListener('click', function() {
    shortcuts[2] = document.getElementById("shorcut3").value;
    chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut4').addEventListener('click', function() {
    shortcuts[3] = document.getElementById("shorcut4").value;
    chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut5').addEventListener('click', function() {
    shortcuts[4] = document.getElementById("shorcut5").value;
    chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut6').addEventListener('click', function() {
    shortcuts[5] = document.getElementById("shorcut6").value;
    chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut7').addEventListener('click', function() {
    shortcuts[6] = document.getElementById("shorcut7").value;
    chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
    saveShortcuts();
  })
  document.getElementById('saveShortcut8').addEventListener('click', function() {
    shortcuts[7] = document.getElementById("shorcut8").value;
    chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
    saveShortcuts();
  })
});
 
function getShortcutsAndRestoreInDom(){
    chrome.storage.local.get({shortcuts:[]},function(data){
        shortcuts = data.shortcuts;
        if(shortcuts[0] != undefined) {
          document.getElementById("shorcut1").value = shortcuts[0];
          chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
        } if(shortcuts[1] != undefined) {
          document.getElementById("shorcut2").value = shortcuts[1];
          chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
        } if(shortcuts[2] != undefined) {
          document.getElementById("shorcut3").value = shortcuts[2];
          chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
        } if(shortcuts[3] != undefined) {
          document.getElementById("shorcut4").value = shortcuts[3];
          chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
        } if(shortcuts[4] != undefined) {
          document.getElementById("shorcut5").value = shortcuts[4];
          chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
        } if(shortcuts[5] != undefined) {
          document.getElementById("shorcut6").value = shortcuts[5];
          chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
        } if(shortcuts[6] != undefined) {
          document.getElementById("shorcut7").value = shortcuts[6];
          chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
        } if(shortcuts[7] != undefined) {
          document.getElementById("shorcut8").value = shortcuts[7];
          chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
        }
    });
}

function saveShortcuts(callback){
    chrome.storage.local.set({shortcuts},function(){
        if(typeof callback === 'function'){
            callback();
        }
    });
}