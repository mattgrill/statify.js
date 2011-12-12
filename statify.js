#!/usr/bin/env node

var applyDefaults = require('./defaults');
var args = require('argsparser').parse();
args = applyDefaults(args);

if ("help" in args && args.help)
{
    console.log("\nUsage:");
    console.log("\n-p <port>   Sets the server port to <port>, defaults to 8000");
    console.log("\n-d <dir>    Sets the directory to be served to <dir>, defaults to the current directory.");
    console.log("\n-h/--help   Displays this message.");
    console.log("\n");
    process.exit();
}


var connect = require('connect');

if (args.dir.substr(0,1) !== '/')
{
    if (args.dir !== '')
    {
        args.dir = '/' + args.dir;
    }

    args.dir = process.cwd() + args.dir;
}

connect().use(connect.logger()).
    use(connect.staticCache({maxObjects: args.cache ? 128 : 0})).
    use(connect.static(args.dir)).
    listen(args.port);

console.log('Server running on port ' + args.port + ' for directory "' + args.dir + '"');
