const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer');
const { attachment } = require('express/lib/response');
const app = express();
app.use(express.json());
app.use(cors());

//API Path: http://localhost:3000/sendmail
app.post('/sendmail',(req,res)=>{
 const body = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: " ", //Sender's Mail
            pass: " " //Sender's Mail App Password
        }
    }); 
     
    const bodyData ='Email:'+body.email+'Name:'+body.name+'Message:'+body.message

    var maillist = ' '; //Can Add Multiple Mail's
    const options = {
        from: " ", //Sender's Mail
        to: " ", //Receiver's Mail
        //bcc: maillist,
        subject: body.subject,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
            table {
                border-collapse: collapse;
                width: 100%;
                font-family: Arial, sans-serif;
                font-size: 14px;
            }

            th, td {
                border: 1px solid #dddddd;
                padding: 8px;
                text-align: left;
            }

            th {
                background-color: #dddddd;
            }
            </style>
        </head>
        <body>
            <h1>Contact Form Enquiry</h1>
            <table>
            <thead>
                <tr>
                <th colspan="2">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Name:</td>
                <td>${body.name}</td>
                </tr>
                <tr>
                <td>Email:</td>
                <td>${body.email}</td>
                </tr>
                <tr>
                <td>Subject:</td>
                <td>${body.subject}</td>
                </tr>
                <tr>
                <td>Message:</td>
                <td>${body.message}</td>
                </tr>
            </tbody>
            </table>
        </body>
        </html>`
    };
    
    transporter.sendMail(options, function(err, info) {
        if(err){
            res.status(500).json({
                status:500,
                message:"Internal server error"
            });
        }
        res.status(200).json({
            status:200,
            message:"Sent successfully"
        })
        console.log("Sent : " + info.response)
    })
})

app.listen(3000,()=>{
    console.log("Server is running on: "+3000)
})




