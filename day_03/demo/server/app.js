const app = require("http").createServer();
const server = require('socket.io')(app);
app.listen(5000);
var users = [];
//当客户端连接到服务器后,服务器需要做什么?
server.on('connect', (client) => {

    function userExists(id) {
        var bool = users.some((userId) => {
            return userId == id;
        });
        return bool;
    }
    //侦听user logined事件
    client.on('user logined', (data) => {
        if (!userExists(data.id)) {
            users.push(data.id);
        }
        //现在服务器要向所有的客户端发一个广播 --- 
        //广播事件 -- welcome new user
        //参数:{....}
        server.emit('welcome new user', { username: data.username, password: '123', age: 22, count: users.length });
    });   

    //侦听send message事件
    client.on('send message', (data) => {
        //服务器再广播事件 -- XXX说过XXXXX
        server.emit('boast message', { message: data.message,face:data.face });
    });
});