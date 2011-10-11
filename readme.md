Statify
=======

This is a simple static file server tool running on node.js and the Connect middleware frwmaework.

It basically wraps the connect-static and connect-staticCache middleware to form a command line tool.

Usage
-----

You can start a static HTTP server in any directory ba launching the statify command in the current directory or ba supplying another directory with the ```-d``` option. The default is the current working directory.

The ```-p``` option lets you specify the port that the server will be listening on. It defaults to port 8000.

Caching is enabled by default. It can be disabled by pasiing the ```-c false``` option.
