const fetchData = require('./test/async');

// First test case
test('Callback Data', done => {
    function callback(data) {
        try {
            expect(data).toBe('admin');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback, 'admin');  // Pass scenario
}, 10000);  // Increase timeout to 10 seconds

// Second test case
test('Callback My Data', done => {
    function callback(data) {
        try {
            expect(data).toEqual({ id: 1000 }); // Use toEqual for object comparison
            done();
        } catch (err) {
            done(err);
        }
    }
    fetchData(callback, 'id');  // Pass scenario
}, 10000);  // Increase timeout to 10 seconds

// Third test case
test('Mocking callback function', done => {
    const mockFunction = jest.fn(data => {
        expect(data).toBe('admin');
        done();
    });
    fetchData(mockFunction, 'admin');  // Pass scenario
}, 10000);  // Increase timeout to 10 seconds
