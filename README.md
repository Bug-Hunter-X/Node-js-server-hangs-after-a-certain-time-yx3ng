# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server hangs after a period of time. The server uses `setTimeout` to simulate a delayed response, and after a while it stops responding to new requests.  The solution involves using proper event handling and error management. 

## Bug Report

The server code in `server.js` uses `setTimeout` to send a response after 5 seconds.  This works for a while but eventually the server becomes unresponsive. This is due to potential memory leaks or unhandled exceptions that could halt the event loop, although in this case the underlying reason is lack of handling for the `uncaughtException` event. 

## Solution

The `serverSolution.js` file provides a solution by implementing proper error handling.  The solution focuses on using the `process.on('uncaughtException')` and `process.on('unhandledRejection')` events to handle errors which might otherwise halt the process.  It also demonstrates more robust handling to avoid the problem altogether. 

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies (if any are required). 
3. Run `node server.js`. 
4. Send multiple requests to the server (e.g. using `curl` or a browser). Observe that eventually the server stops responding.
5. Run `node serverSolution.js`. Note that this version continues to operate correctly, even under stress. 