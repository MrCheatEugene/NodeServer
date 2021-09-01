# NodeServer
Simple nodejs server.  Uses HTTP,FS,Readline libaries(installed in nodejs by default).
# Installing
1. Run `node app.js`.
2. Enter the port for webserver.
3. If it says `Done! Listening on port `port that you've entered before`; Content-Type is text/html. Using index.html file for
all of the requests.` and you can access server then, Congrats! The server was set up right and it worked!

# Troubleshooting
###### File system error
Create `index.html` file in the same folder as an executable.
If it exists - try setting permissions to 777 OR running `node` as root/administrator/using sudo

###### Port is busy
Change the port
