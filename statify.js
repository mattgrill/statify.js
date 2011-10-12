#!/usr/bin/env node

var applyDefaults = require('./defaults');
var args = applyDefaults(require('argsparser').parse());
var connect = require('connect');

if (args.dir.substr(0,1) !== '/')
{
    args.dir = process.cwd() + '/' + args.dir;
}

connect().use(connect.logger()).
    use(connect.staticCache({maxObjects: args.cache ? 128 : 0})).
    use(connect.static(args.dir)).
    listen(args.port);

console.log('Server running on port ' + args.port + ' for directory "' + args.dir + '"');
