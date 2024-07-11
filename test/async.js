// test/async.js
module.exports = function fetchData(callback, scenario) {
    setTimeout(() => {
        if (scenario === 'admin') {
            callback('admin');
        } else if (scenario === 'id') {
            callback({ id: 1000 });
        }
    }, 1000);
};
