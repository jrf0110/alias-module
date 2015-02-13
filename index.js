var fs    = require('fs');
var path  = require('path');

module.exports = function( name, from ){
  var nm    = path.join( process.cwd(), 'node_modules' );
  var dir   = path.join( nm, name );
  var isDir = fs.statSync( from ).isDirectory();
  var to    =  isDir ? dir : path.join( dir, 'index.js' );

  if ( !fs.existsSync( nm ) ){
    fs.mkdirSync( nm );
  }

  // Ensure it isn't already a node_module
  if ( fs.existsSync( path.join( dir, 'package.json' ) ) ){
    throw new Error('Cannot alias module `' + name + '` because a node module already exists with that name');
  }

  // Clear out previous
  if ( fs.existsSync( dir ) ){
    fs.unlinkSync( to );
    if ( !isDir ) fs.rmdirSync( dir );
  }

  if ( !isDir ) fs.mkdirSync( dir );
  fs.symlinkSync( from, to, isDir ? 'dir' : 'file' );
};