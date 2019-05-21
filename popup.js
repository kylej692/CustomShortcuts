var shortcuts = [];
$(function() {
  getShortcutsAndRestoreInDom();
  $('#saveShortcut1').click(function() {
    shortcuts[0] = $('#shortcut1').val();
    chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
    saveShortcuts();
  })
  $('#reset1').click(function() {
    shortcuts[0] = "";
    chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
    $('#shortcut1').val("");
    saveShortcuts();
  })
  $('#saveShortcut2').click(function() {
    shortcuts[1] = $('#shortcut2').val();
    chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
    saveShortcuts();
  })
  $('#reset2').click(function() {
    shortcuts[1] = "";
    chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
    $('#shortcut2').val("");
    saveShortcuts();
  })
  $('#saveShortcut3').click(function() {
    shortcuts[2] = $('#shortcut3').val();
    chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
    saveShortcuts();
  })
  $('#reset3').click(function() {
    shortcuts[2] = "";
    chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
    $('#shortcut3').val("");
    saveShortcuts();
  })
  $('#saveShortcut4').click(function() {
    shortcuts[3] = $('#shortcut4').val();
    chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
    saveShortcuts();
  })
  $('#reset4').click(function() {
    shortcuts[3] = "";
    chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
    $('#shortcut4').val("");
    saveShortcuts();
  })
  $('#saveShortcut5').click(function() {
    shortcuts[4] = $('#shortcut5').val();
    chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
    saveShortcuts();
  })
  $('#reset5').click(function() {
    shortcuts[4] = "";
    chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
    $('#shortcut5').val("");
    saveShortcuts();
  })
  $('#saveShortcut6').click(function() {
    shortcuts[5] = $('#shortcut6').val();
    chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
    saveShortcuts();
  })
  $('#reset6').click(function() {
    shortcuts[5] = "";
    chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
    $('#shortcut6').val("");
    saveShortcuts();
  })
  $('#saveShortcut7').click(function() {
    shortcuts[6] = $('#shortcut7').val();
    chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
    saveShortcuts();
  })
  $('#reset7').click(function() {
    shortcuts[6] = "";
    chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
    $('#shortcut7').val("");
    saveShortcuts();
  })
  $('#saveShortcut8').click(function() {
    shortcuts[7] = $('#shortcut8').val();
    chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
    saveShortcuts();
  })
  $('#reset8').click(function() {
    shortcuts[7] = "";
    chrome.runtime.sendMessage({"message": "shortcut8", "value": shortcuts[7]});
    $('#shortcut8').val("");
    saveShortcuts();
  })
});

function getShortcutsAndRestoreInDom(){
    chrome.storage.local.get({shortcuts:[]},function(data){
        shortcuts = data.shortcuts;
        if(shortcuts[0] != undefined) {
          $('#shortcut1').val(shortcuts[0]);
          chrome.runtime.sendMessage({"message": "shortcut1", "value": shortcuts[0]});
        } if(shortcuts[1] != undefined) {
          $('#shortcut2').val(shortcuts[1]);
          chrome.runtime.sendMessage({"message": "shortcut2", "value": shortcuts[1]});
        } if(shortcuts[2] != undefined) {
          $('#shortcut3').val(shortcuts[2]);
          chrome.runtime.sendMessage({"message": "shortcut3", "value": shortcuts[2]});
        } if(shortcuts[3] != undefined) {
          $('#shortcut4').val(shortcuts[3]);
          chrome.runtime.sendMessage({"message": "shortcut4", "value": shortcuts[3]});
        } if(shortcuts[4] != undefined) {
          $('#shortcut5').val(shortcuts[4]);
          chrome.runtime.sendMessage({"message": "shortcut5", "value": shortcuts[4]});
        } if(shortcuts[5] != undefined) {
          $('#shortcut6').val(shortcuts[5]);
          chrome.runtime.sendMessage({"message": "shortcut6", "value": shortcuts[5]});
        } if(shortcuts[6] != undefined) {
          $('#shortcut7').val(shortcuts[6]);
          chrome.runtime.sendMessage({"message": "shortcut7", "value": shortcuts[6]});
        } if(shortcuts[7] != undefined) {
          $('#shortcut8').val(shortcuts[7]);
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
