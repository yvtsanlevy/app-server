const path =require('path');
const http=require('http')
const express= require('express');
const socketIO= require('socket.io');

const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT||3000;

var app = express();
var server=http.createServer(app);
var io= socketIO(server);

io.on('connection', (socket) =>{
	console.log("new user connected");

	// socket.emit('newEmail',{
	// 	frome:'yvtsan',
	// 	text:'new emaiil from yvtsan',
	// 	createAt:123
	// });

	socket.on('createMessage',(message)=>{
		console.log('createMessage',message)
	// 	io.emit('newMessage',{;
	// 		from: message.from,
	// 		text: message.text,
	// 		createAt: new Date().getTime()
	// 	});
	// 	});

	socket.broadcast.emit('newMessage',{
		 		from: message.from,
			text: message.text,
			createAt: new Date().getTime()
		});
  });
	socket.on('disconnect',()=>{
		console.log('the user was disconnect ')
	})

})
app.use(express.static(publicPath));

server.listen(port, () => {
	console.log('starting on port ${port}');
});