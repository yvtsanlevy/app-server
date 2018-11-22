var socket = io();
		socket.on('connect',function () {
			console.log('connected to server')

			socket.emit('creatEmail',{
				to:'adress',
				text:'helllo'
			});
		});

		socket.on('disconnect',function(){
			console.log('unebale to connect to the server')
		});



		socket.on('newEmail',function(email){
			console.log('new email',email);
		})