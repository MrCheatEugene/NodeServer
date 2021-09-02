# NodeServer
Simple nodejs server.  Uses HTTP,FS,Readline libaries(installed in nodejs by default).
# Installing
1. Run `node app.js`.
2. Enter the port for webserver.
3. If it says `Done! Listening on port `port that you've entered before`; Content-Type is text/html. Using index.html file for
all of the requests.` and you can access server then, Congrats! The server was set up right and it worked!

# Troubleshooting
###### File system error
(FOR 1.0 VERSION)
Create `index.html` file in the same folder as an executable.
If it exists - try setting permissions to 777 OR running `node` as root/administrator/using sudo
(FOR FUTURE VERSIONS)
Check nodejs console. You will see more details here.
`New request: GET /(pathtofile)(200) by (ip:port)` messages mean that everything is good.
`New request: GET /(pathtofile)(404) by (ip:port)` messages mean that server couldn't return file contents and returned 404 not found.
`Error opening /(file) Error:Error: ENOENT: no such file or directory` messages mean that the server couldn't get file contents and had to return 404 page contents.
###### Port is busy
Change the port
