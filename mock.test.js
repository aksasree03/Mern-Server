jest.mock('./test/utils', () => ({
    getData: jest.fn(),
    getRaw: jest.fn()
}));

const { getData, getRaw } = require('./test/utils');
const { processData, processRaw } = require('./test/processData');

test('Mocked the process data', () => {
    getData.mockReturnValue('Mocked data');
    expect(processData()).toBe('Processed:Mocked data'); // No space after the colon
});

test('Mocked Raw Data', () => {
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe('true'); // Compare string to string
});
