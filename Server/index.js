const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.listen(4000, () => {
    console.log('Server works at port 4000.')
});

app.length('/download', (req,res) => {
    var URL = req.query.URL;
    res.json({url:URL});
});