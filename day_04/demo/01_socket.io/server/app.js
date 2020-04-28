const app = require("http").createServer();
const server = require('socket.io')(app);
app.listen(5000);
var users = [];
//当客户端连接到服务器后,服务器需要做什么?
server.on('connect', (client) => {

    function userExists(id) {
        var bool = users.some((user) => {
            return user.id == id;
        });
        return bool;
    }
    //侦听user logined事件
    client.on('user logined', (data) => {
        if (!userExists(data.id)) {
            users.push({
                id: data.id,
                username: data.username,
                face: data.face,
                sessionId:client.id
            });
            //头像
            //昵称
        }
        //现在服务器要向所有的客户端发一个广播 --- 
        //广播事件 -- welcome new user
        //参数:{....}
        server.emit('welcome new user', { username: data.username, count: users.length,users:users });
    });   

    //侦听send message事件
    client.on('send message', (data) => {
        //服务器再广播事件 -- XXX说过XXXXX
        server.emit('boast message', { message: data.message,face:data.face });
    });

    //客户端断开事件
    client.on('disconnect', () => {
        //客户端断开连接后，从users数组中移出用户
        users.forEach((user, index) => {
            if (client.id == user.sessionId) {
                users.splice(index, 1);
                return;
            } 
        });
        //服务器还需要发送广播，通知所有的客户端 users 的状态发生了变化
        server.emit('user leave', { count: users.length, users: users });
    });
});