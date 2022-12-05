const express = require('express')
var bodyParser = require('body-parser')
const path = require("path");
const server = new express()
var nodemailer = require('nodemailer');
const router = express.Router();
const port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.use(bodyParser.json()); // to support JSON-encoded bodies
server.use(router)
server.use(express.static(path.join(__dirname, "public")));
server.post('/SubmitForm', urlencodedParser, (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    contactMail(email, name, message)
    res.redirect('/')

})

server.post('/SubmitJoinUs', urlencodedParser, (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let mobile = req.body.name
    let address = req.body.address
    let message = req.body['message-text']
    sendmail(email, subject, name, mobile, address, message)
    res.redirect(req.originalUrl)

})



server.get('/galleryDetails', (req, res) => {
    let page = req.query.page
    if (page === undefined) {
        page = 1;

    }
    page = parseInt(page);

    let obj = {

        "Gallery": [

            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 1 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 2 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 3 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 4 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 5 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 6 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 7 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 8 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
            {
                "Images": [
                    "https://i.picsum.photos/id/292/500/300.jpg?hmac=g6c0N1WLJbtvNdACe4VMmiB8ud88jCRsW4O3JvMpTy8", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw", "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
                ],
                "name": "this is name 9 " + page,
                "main": "https://i.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw"
            },
        ],
        "pages": 5

    }
    res.send(obj)
})

// server.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })



sendmail = (to, subject, name, mobile, address, message) => {
    const mail = "jay787815@gmail.com";
    const password = "siwiwnnglnieydpe";


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: password
        }
    });

    const msg = `<center><h1>` + name + `</h1></center><br><center><h2>` + mobile + `</h2></center><br><br><p>` + `</h1></center><br><center><h2>` + to + `</h2></center><br><br><p>` + address + `</p>` + `</h2></center><br><br><p>` + message + `</p>`

    const mailOptions = {
        from: mail, // sender address
        to: mail, // list of receivers
        subject: subject, // Subject line
        html: msg // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })
}

contactMail = (to, name, message) => {
    subject = "For Contact Us"
    const mail = "jay787815@gmail.com";
    const password = "siwiwnnglnieydpe";


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: password
        }
    });

    const msg = `<center><h1>` + name + `</h1></center><br><center><h2>` + to + `</h2></center><br><br><p>` + message + `</p>`

    const mailOptions = {
        from: mail, // sender address
        to: mail, // list of receivers
        subject: subject, // Subject line
        html: msg // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })
}


module.exports = {
    "app": server,
    "router": router

}
