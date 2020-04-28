//FileSystem
const fs = require('fs');
const express = require('express');
const server = express();
//导入 uuid 模块(新增)
const uuid = require('uuid');

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


var storage = multer.diskStorage({
    //上传时目录的相关规则
    destination: function (req, file, cb) {
        //构建Date()对象,作为目录名称
        var now = new Date();
        var fullYear = now.getFullYear();
        var month = now.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var day = now.getDate();

        //构建目录名称
        var path = 'upload/' + fullYear + '-' + month + '-' + day;

        //判断目录是否存在,如果不存在则自动创建
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, (err) => {
                if (err) throw err; 
            });
        }

        cb(null, path);
    },
    //上传时文件名称的相关规则
    filename: function (req, file, cb) {
        //获取原始文件的名称
        var origin = file.originalname;

        //获取文件的扩展名
        var extension = origin.substr(origin.lastIndexOf('.') + 1);
        extension = extension.toLowerCase();

        //生成主文件名 -- 生成基于时间戳的UUID
        var main = uuid.v1();
        
        //生成新的文件名称
        filename = main + '.' + extension;

        cb(null, filename);
    }
});

//使用自定义规则

upload = multer({ storage: storage });

server.get('/custom', (req, res) => {
    var data = fs.readFileSync('./03_custom.html', { encoding: 'utf8' });
    res.send(data);
});

server.post('/custom', upload.array('face'), (req, res) => {
    console.log(req.files);
    res.send('文件上传成功');
});

//拖放上传

server.get('/drag', (req, res) => {
    var data = fs.readFileSync('./04_drag.html', { encoding: 'utf8' });
    res.send(data);
});

server.post('/drag', upload.array('face'), (req, res) => {
    console.log(req.files);
    res.send('文件上传成功');
});

server.listen(8080);