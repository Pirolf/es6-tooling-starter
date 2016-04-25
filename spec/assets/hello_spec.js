describe('Hello', () => {
	let hello;
	
	beforeEach(() => {
		hello = require('../../assets/javascripts/hello');
		console.log(hello)
	});

	it('#test', () => {
		expect(hello.test('Cat')).toBe('Hello Cat');
	});
});