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

	socket.emit('newEmail',{
		frome:'yvtsan',
		text:'new emaiil from yvtsan',
		createAt:123
	});

	socket.on('creatEmail',(newEmail)=>{
		console.log('creatEmail',newEmail)});

	socket.on('disconnect',()=>{
		console.log('the user was disconnect ')
	})

})
app.use(express.static(publicPath));

server.listen(port, () => {
	console.log('starting on port ${port}');
});