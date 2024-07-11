let dataSets = [];

beforeAll(() => {
    dataSets = ['raju', 'ravi', 'ram']; // Add 'ram' to the array
});

beforeEach(() => {
    console.log('Before each setup is called');
});

afterEach(() => {
    console.log('After each setup is called');
});

afterAll(() => {
    dataSets = [];
});

test('Test case', () => {
    expect(dataSets.length).toBe(3); // Update length to 3
});

test('Data set contains', () => {
    expect(dataSets).toContain('ram'); // No change needed here
});
