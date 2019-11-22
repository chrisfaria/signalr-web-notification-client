# SignalrWebNotificationClient

A web notification application that receives broadcasted messages from a SignalR server/hub. it a simple application that initiates a connection to a server and then waits for messages. When a message is recieved it is posted as a PrimeNG toast on the screen.

## SignalR Server

To test with a server that runs the hub check out my .NET Core application here:
https://github.com/chrisfaria/SignalRNotificationHub

## Run Instructions
Use Postman to hit the API and broadcast a notification:

Steps:

- open a terminal window
- type **ng serve** and press enter
- in a web browser navigate to http://localhost:4200
- run the sever and execute a broadcast message from there