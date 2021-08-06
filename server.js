//dependencies
const express = require('express');
const multer = require('multer');
const fs=require('fs');

//upload destination
const upload = multer({dest: __dirname + '/uploads/images'});

//express port
const app = express();
const PORT = 3000;

// linking with simple HTML
app.use(express.static('public'));

//app route
app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
        const filesource=req.file.path;
        fs.rename(filesource, __dirname+ '/uploads/images/image.jpg', ()=> {
            console.log("file stored at" +__dirname+ '/uploads/images/image.jpg') ;
        });
    }
    else throw 'error';
});

//port information
app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});

