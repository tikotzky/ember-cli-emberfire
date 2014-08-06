'use strict';

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

function EmberCLIEmberFire(project) {
  this.project = project;
  this.name    = 'Ember CLI EmberFire';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIEmberFire.prototype.treeFor = function treeFor(name) {
  if (name !== 'vendor') { return; }

  // We do this crazyness below because we to export a vendor tree which
  // only contains emberfire and firebase, looking like this...
  // .
  // |____emberfire
  // |____firebase
  // the default vendor tree will contain all the other bower dependencies
  // this code below gets a seperate tree for each dep and then merges them
  // into a single tree which is then returned

  var vendorPath =  path.join('node_modules', 'ember-cli-emberfire', 'vendor');

  var firebaseTree = unwatchedTree(path.join(vendorPath, 'firebase'));
  firebaseTree = pickFiles(firebaseTree, {srcDir: '/', destDir: 'firebase'});

  var emberfireTree = unwatchedTree(path.join(vendorPath, 'emberfire'));
  emberfireTree = pickFiles(emberfireTree, {srcDir: '/', destDir: 'emberfire'});

  return mergeTrees([firebaseTree, emberfireTree]);
};

EmberCLIEmberFire.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/firebase/firebase.js');
  this.app.import('vendor/emberfire/dist/emberfire.js');
};

module.exports = EmberCLIEmberFire;
