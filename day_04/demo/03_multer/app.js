//FileSystem
const fs = require('fs');
const express = require('express');
const server = express();

//加载Multer模块
var multer = require('multer');

var upload = multer({
    dest: 'upload/'
});


server.use(express.static('public'));

//单文件上传

server.get('/single', (req, res) => {
    var data = fs.readFileSync('./01_single.html', { encoding: 'utf8' });
    res.send(data);
});

server.post('/single', upload.single('face'), (req, res) => {
    console.log(req.file);
    res.send('文件上传成功');
});


//多文件上传

server.get('/multiple', (req, res) => {
    var data = fs.readFileSync('./02_multiple.html', { encoding: 'utf8' });
    res.send(data);
});

server.post('/multiple', upload.array('face'), (req, res) => {
    console.log(req.files);
    res.send('文件上传成功');
});


//自定义规则

var path = 'upload/';
var aaa = multer.diskStorage({
    //上传时目录的相关规则
    destination: function (req, file, cb) {
        cb(null, path);
    },
    //上传时文件名称的相关规则
    filename: function (req, file, cb) {
        //文件名称的规则
        //获取原始文件的扩展名
        //生成新的主文件名称
        //将新的主文件名与扩展名合并成新的完整文件
        var origin = file.originalname;
        filename = Math.random() * 10000  +　'aaa';
        cb(null, filename);
    }
});

//使用自定义规则

upload = multer({ storage: aaa });

server.get('/custom', (req, res) => {
    var data = fs.readFileSync('./03_custom.html', { encoding: 'utf8' });
    res.send(data);
});

server.post('/custom', upload.array('face'), (req, res) => {
    console.log(req.files);
    res.send('文件上传成功');
});

server.listen(8080);