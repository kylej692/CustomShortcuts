var shortcuts = [];
document.addEventListener('DOMContentLoaded', function() { 
  getShortcutsAndRestoreInDom();
  document.getElementById('saveShortcut1').addEventListener('click', function() {
    shortcuts[0] = document.getElementById("shortcut1").value;
    chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
    saveShortcuts();
  })
  document.getElementById('reset1').addEventListener('click', function() {
    shortcuts[0] = "";
    chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
    document.getElementById('shortcut1').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut2').addEventListener('click', function() {
    shortcuts[1] = document.getElementById("shortcut2").value;
    chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
    saveShortcuts();
  })
  document.getElementById('reset2').addEventListener('click', function() {
    shortcuts[1] = "";
    chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
    document.getElementById('shortcut2').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut3').addEventListener('click', function() {
    shortcuts[2] = document.getElementById("shortcut3").value;
    chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
    saveShortcuts();
  })
  document.getElementById('reset3').addEventListener('click', function() {
    shortcuts[2] = "";
    chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
    document.getElementById('shortcut3').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut4').addEventListener('click', function() {
    shortcuts[3] = document.getElementById("shortcut4").value;
    chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
    saveShortcuts();
  })
  document.getElementById('reset4').addEventListener('click', function() {
    shortcuts[3] = "";
    chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
    document.getElementById('shortcut4').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut5').addEventListener('click', function() {
    shortcuts[4] = document.getElementById("shortcut5").value;
    chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
    saveShortcuts();
  })
  document.getElementById('reset5').addEventListener('click', function() {
    shortcuts[4] = "";
    chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
    document.getElementById('shortcut5').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut6').addEventListener('click', function() {
    shortcuts[5] = document.getElementById("shortcut6").value;
    chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
    saveShortcuts();
  })
  document.getElementById('reset6').addEventListener('click', function() {
    shortcuts[5] = "";
    chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
    document.getElementById('shortcut6').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut7').addEventListener('click', function() {
    shortcuts[6] = document.getElementById("shortcut7").value;
    chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
    saveShortcuts();
  })
  document.getElementById('reset7').addEventListener('click', function() {
    shortcuts[6] = "";
    chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
    document.getElementById('shortcut7').value = "";
    saveShortcuts();
  })
  document.getElementById('saveShortcut8').addEventListener('click', function() {
    shortcuts[7] = document.getElementById("shortcut8").value;
    chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
    saveShortcuts();
  })
  document.getElementById('reset8').addEventListener('click', function() {
    shortcuts[7] = "";
    chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
    document.getElementById('shortcut8').value = "";
    saveShortcuts();
  })
});
function getShortcutsAndRestoreInDom(){
    chrome.storage.local.get({shortcuts:[]},function(data){
        shortcuts = data.shortcuts;
        if(shortcuts[0] != undefined) {
          document.getElementById("shortcut1").value = shortcuts[0];
          chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
        } if(shortcuts[1] != undefined) {
          document.getElementById("shortcut2").value = shortcuts[1];
          chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
        } if(shortcuts[2] != undefined) {
          document.getElementById("shortcut3").value = shortcuts[2];
          chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
        } if(shortcuts[3] != undefined) {
          document.getElementById("shortcut4").value = shortcuts[3];
          chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
        } if(shortcuts[4] != undefined) {
          document.getElementById("shortcut5").value = shortcuts[4];
          chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
        } if(shortcuts[5] != undefined) {
          document.getElementById("shortcut6").value = shortcuts[5];
          chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
        } if(shortcuts[6] != undefined) {
          document.getElementById("shortcut7").value = shortcuts[6];
          chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
        } if(shortcuts[7] != undefined) {
          document.getElementById("shortcut8").value = shortcuts[7];
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
