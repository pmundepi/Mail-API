# Mail-API

This code creates a web server using the ExpressJS framework, with CORS (Cross-Origin Resource Sharing) enabled, that can send an email using the Nodemailer library.
The code sets up an endpoint (route) with the path `"/sendmail"` that listens to HTTP POST requests. The request body should contain information such as the sender's name,
email, subject, and message. The server creates a transporter using a Gmail account and sends the email using the information from the request body.

The server returns a JSON response with a status code of `200` and message "`Sent successfully`" if the email was sent successfully, or a status code of `500` and message "`Internal server error`" if there was an error sending the email. The server listens on port `3000` and logs a message to the console when it starts up.

#How To Use
* Clone this repository `git clone <repo link>`.
* Run `npm install express.js` to install Express JS.
* Run `npm install cors` to install CORS.
* Check it out using `node server.js`.

# Usage

Visit [http://localhost:3000/sendmail](http://localhost:3000/sendmail) in your browser.
