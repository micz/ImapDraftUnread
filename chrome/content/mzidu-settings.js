"use strict";
var miczImapDraftUnreadPref = {
  
  currentOS:'',

  onLoad: function(){
    this.currentOS=miczImapDraftUnreadOSUtils.getCurrentOS();
    dump('>>>>>>>> miczImapDraftUnreadPref currentOS: '+this.currentOS+"\r\n");
  },

  clearNew_reset: function(){
    let prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
    prefs = prefs.getBranch("extensions.miczImapDraftUnread.");
    if(prefs.getBoolPref("makeRead")){
        document.getElementById("ImapDraftUnread.clearNew_checkbox").checked=0;
        prefs.setBoolPref("clearNew",false);
    }
  },

  makeRead_reset: function(){
    let prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
    prefs = prefs.getBranch("extensions.miczImapDraftUnread.");
    if(prefs.getBoolPref("clearNew")){
        document.getElementById("ImapDraftUnread.makeRead_checkbox").checked=0;
        prefs.setBoolPref("makeRead",false);
    }
  },

};
