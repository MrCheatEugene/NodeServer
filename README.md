# NodeServer
Simple nodejs server.  Uses HTTP,FS,Readline libaries(installed in nodejs by default).
# Installing
Download and extract nodeserver archive. It can be found in releases. From v.1.1.2 Requires https://www.npmjs.com/package/mime-types
## On local machine
1. Run `node app.js`.
2. Enter the port for webserver.
3. If it says `Done! Listening on port `port that you've entered before`; Content-Type is text/html. Using index.html file for
all of the requests.` and you can access server then, Congrats! The server was set up right and it worked!
## On hosting(npm)
1. Set start command to npm i && npm start or npm i && npm test
2. Start the server.
3. In pterodactyl it will not show "enter port" message, so you will need to just send port to console. You will need to use port that hosting gave to you. 
4. If it says `Done! Listening on port `port that you've entered before`; Content-Type is text/html. Using index.html file for
all of the requests.` and you can access server then, Congrats! The server was set up right and it worked!
###### From v. 1.2 website folder is separated from code.
###### From v. 1.1.2 you can protect files from download.
# Troubleshooting
###### File system error
## (FOR 1.0 VERSION)
Create `index.html` file in the same folder as an executable.
If it exists - try setting permissions to 777 OR running `node` as root/administrator/using sudo
## (FOR FUTURE VERSIONS)
Check nodejs console. You will see more details here.

`PHP compilation error in file: ./www/(file).php. Full message:` meants that PHP couldn't finish compiling this file for some reason. 

`New request: GET /(pathtofile)(200) by (ip:port)` messages mean that everything is good.

`New request: GET /(pathtofile)(404) by (ip:port)` messages mean that server couldn't return file contents and returned 404 not found.

`RangeError [ERR_SOCKET_BAD_PORT]: Port should be >= 0 and < 65536. Received ` means that you've entered invalid port. Ender valid port.

`Error opening /www/(file) Error:Error: ENOENT: no such file or directory` messages mean that the server couldn't get file contents and had to return 404 page contents.
Check that path for (file).

`Error: listen EADDRINUSE: address already in use :::port` means that port is already in use. Try disabling your firewall/fowarding ports in router/restarting your PC/searching&changing port for some specific app(like another webserver). 
