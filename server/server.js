const path =require('path');
const http=require('http')
const express= require('express');
const socketIO= require('socket.io');

const {generetMessage}=require('./util/message');
const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT||3000;

var app = express();
var server=http.createServer(app);
var io= socketIO(server);

io.on('connection', (socket) =>{
	console.log("new user connected");

	 socket.emit('newMessage',generetMessage('admin','welcome'));

	 socket.broadcast.emit('newMessage',generetMessage('admin','new user joined'));

	socket.on('createMessage',(message,callback)=>{
		console.log('createMessage',message)
	 	io.emit('newMessage',generetMessage(message.from,message.text));
	   callback('this is from the server');

	// 		from: message.from,
	// 		text: message.text,
	// 		createAt: new Date().getTime()
	// 	});
	// 	});

   // send message for 
	// socket.broadcast.emit('newMessage',generetMessage('admin','welcom to the chat app'));
 //  });
	socket.on('disconnect',()=>{
		console.log('the user was disconnect ')
	})

});
	});
app.use(express.static(publicPath));

server.listen(port, () => {
	console.log('starting on port ${port}');
});