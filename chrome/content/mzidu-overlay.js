"use strict";
var miczImapDraftUnread = {

    init: function(){
      //dump('>>>>>>>> miczImapDraftUnread init...'+"\r\n");
      //dump('>>>>>>>> nsMsgFolderFlagType.Drafts: '+ nsMsgFolderFlagType.Drafts+"\r\n");
      //dump('>>>>>>>> nsMsgFolderFlagType.Drafts: '+ (0x00000400).toString(16)+"\r\n");
      var nsIFolderListener = Components.interfaces.nsIFolderListener;
      var notifyFlags = nsIFolderListener.added;
      var mailSession = Components.classes["@mozilla.org/messenger/services/session;1"]. getService(Components.interfaces.nsIMsgMailSession);
      mailSession.AddFolderListener(miczImapDraftUnread.duFolderListener,notifyFlags);
    },

    duFolderListener:
    {
         OnItemAdded: function(parentItem, item, view) {
            if(parentItem.flags & 0x00000400) { //It's a draft folder!!
              dump( 'OnItemAdded: '+parentItem.flags.toString(16) +"\r\n");
              //parentItem.markAllMessagesRead(null);
                parentItem.clearNewMessages();
              //parentItem.getTotalMessages(null);
            }
         },
         OnItemRemoved: function(parentItem, item, view) { },
         OnItemPropertyChanged: function(item, property, oldValue, newValue) { },
         OnItemIntPropertyChanged: function(item, property, oldValue, newValue) { },
         OnItemBoolPropertyChanged: function(item, property, oldValue, newValue) { },
         OnItemUnicharPropertyChanged: function(item, property, oldValue, newValue) { },
         OnItemPropertyFlagChanged: function(item, property, oldFlag, newFlag) { },
         OnItemEvent: function(folder, event) { }
    }

};
window.addEventListener("load", miczImapDraftUnread.init, false);
