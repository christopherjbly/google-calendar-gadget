// Copyright 2008 Google Inc.  All Rights Reserved.

/**
 * @fileoverview Quick add event dialog.
 */

var g_quickAdd = null;

/**
 * onOpen event handler for quick add input details view.
 */
function view_onopen() {
  g_quickAdd = new QuickAddDialog();
  setTimeout(quickAddEdit.focus(), 100);
}

/**
 * Class for interaction with the quick add dialog.
 * @constructor
 */
function QuickAddDialog() {
  quickAddEdit.onkeypress = Utils.bind(this.onKeyPress, this);
  btnAdd.onclick = Utils.bind(this.onSubmit, this);
  imgClose.onclick = Utils.bind(this.close, this);
}

/**
 * OnkeyPress handler for the quick add input edit.
 */
QuickAddDialog.prototype.onKeyPress = function() {
  if (event.keyCode == 13) {
    this.createEvent(quickAddEdit.value);
  }
};

/**
 * onSubmit handler when the button for adding the event is clicked.
 */
QuickAddDialog.prototype.onSubmit = function() {
  this.createEvent(quickAddEdit.value);
};

/**
 * Trigger options so that new event will be created in main view.
 * @param {string} text Quick add text.
 */
QuickAddDialog.prototype.createEvent = function(text) {
  if (text.length > 0) {
    options.putValue(OPTIONS.QUICKADD, text);
    this.close();
  }
};

/**
 * Close handler when the X in the top-right corner is clicked.
 */
QuickAddDialog.prototype.close = function() {
  options.putValue(OPTIONS.CLOSE_DETAILS, true);
};
