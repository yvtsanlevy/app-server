var socket = io();
		socket.on('connect',function () {
			console.log('connected to server')

			// socket.emit('creatEmail',{
			// 	from:'yvtsan',
			// 	to:'adress',
			// 	text:'helllo'
			// });
		});

		socket.on('disconnect',function(){
			console.log('unebale to connect to the server')
		});



		socket.on('newMessage',function(message){
			console.log('newMessage',message);
		})