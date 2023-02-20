import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express() //Creates a new Express.js application instance and assigns it to the app variable.
const PORT = 3000 // a constant PORT with the value of 3000, which will be used as the port number for the web server.

//below code overview: When someone visits the website at "localhost:3000" then
//the server will send back a message saying "Hello from the [hostname of the computer running the code]".
app.get("/", (req, res) => {
  const helloMessage = `Version:2.0.0 says Hello from the ${os.hostname()}`
  console.log(helloMessage)
  res.send(helloMessage)
})

//below code overview: When someone visits "localhost:3000/nginx", then the
//server will send a request to another website (at the address "http://nginx") and send back the response from that website.
app.get("/nginx", async (req, res) => {
  const url = 'http://nginx'
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
})

//overview: Finally, the Express.js application starts listening for incoming
// connections on the specified PORT by calling the app.listen() method.
app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})