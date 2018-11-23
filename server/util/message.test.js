var expect = require('expect');

var {generetMessage}= require('./message');

describe('generetMessage',() =>{

	it('should generate correct message ', () =>{
		var from= 'jen';
		var text='some text';
		var message=generetMessage(from,text);

		expect(typeof message.createdAt).toBe('number')
		expect(message).toMatchObject({from,text});
	})
})